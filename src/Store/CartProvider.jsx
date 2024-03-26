/* eslint-disable react/prop-types */
import { useReducer } from "react";
import CartContext from "./CartContext";


 const defaultCartState = {
    items: [],
    totalAmount: 0
 };
   const cartReducer = (state, action) => {

      if(action.type === 'Add')  {
                                 
          const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        
                             
            const CartIndex = state.items.findIndex(
            (item) => item.id === action.item.id
            
            )
            
         const existingItem = state.items[CartIndex]
         
          let UpdatedItems;
           
           if(existingItem) {
          const  UpdatedItem = {
                ...existingItem,
                amount:existingItem.amount + action.item.amount
            };
              UpdatedItems = [...state.items];
              UpdatedItems[CartIndex] = UpdatedItem
           } else {
                UpdatedItems = state.items.concat(action.item);
           }
            
          return {
            items: UpdatedItems,
            totalAmount: updatedTotalAmount
          }
      }
       
        if(action.type === 'Remove'){
        
           const CartIndex = state.items.findIndex(
            (item) => item.id === action.id)
              const existingItem = state.items[CartIndex]
              const UpdatedTotalAmount = state.totalAmount - existingItem.price;

              let UpdatedItems;
              if(existingItem.amount === 1) {
                   UpdatedItems = state.items.filter(item => item.id !== action.id)
              }else {
                       const UpdatedItem = {...existingItem, amount: existingItem.amount - 1}
                       UpdatedItems = [...state.items];
                      UpdatedItems[CartIndex] = UpdatedItem;
              } 
                return {
                    items: UpdatedItems,
                    totalAmount: UpdatedTotalAmount
                }
        }
     
   return  defaultCartState;
   }

  const CartProvider = (props) => {

   const [cartState, DispatchAction]  = useReducer(cartReducer, defaultCartState)

     const addItemToCartHandler = (item) => {
        DispatchAction({type: 'Add', item: item})
     };
     const removeItemFromCartHandler = (id) => {
        DispatchAction({type: 'Remove', id:id})
     };


   const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
   }




 return(
          <CartContext.Provider value={cartContext}>
            {props.children}
          </CartContext.Provider>
 )

   }
  
   export default CartProvider;