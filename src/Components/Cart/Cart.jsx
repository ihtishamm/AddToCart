import { useContext } from "react"
import Modal from "../UI/Modal"
import CartContext from "../../Store/CartContext"
import CartItem from "./CartItem";
 

// eslint-disable-next-line no-unused-vars, react/prop-types
export default function Cart({onHideCart}) {
  const  contextPoint  = useContext(CartContext)
     
    const totalAmount = `${contextPoint.totalAmount.toFixed(2)}`;

    const hasItems = contextPoint.items.length > 0;

    // eslint-disable-next-line no-unused-vars
    const cartItemRemoveHandler = id => {
        contextPoint.removeItem(id)
    };
    // eslint-disable-next-line no-unused-vars
    const cartItemAddHandler = item => {
        contextPoint.addItem({...item, amount: 1})
    };

    const cartItems =(<ul className="cart-items">
          {contextPoint.items.map((item) => (
            <CartItem key={item.id} name={item.name} amount={item.amount} 
               price={item.price}
               onRemove={cartItemRemoveHandler.bind(null, item.id)}
               onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
    </ul>)
  return (
     
    <Modal  onClose={onHideCart}>
        {cartItems}
        <div className="total">
            <span >
                Toatal amount
            </span>
            <span>{totalAmount}</span>
        </div>
<div className="actions"> 
     
 <button className="button--alt"  onClick={onHideCart}>Close</button>
{ hasItems && <button className="button">Order</button>}
</div>
</Modal> 
    
  )
}
