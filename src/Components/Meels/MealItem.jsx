/* eslint-disable react/prop-types */

import CartContext from "../../Store/CartContext";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
                                                 
// eslint-disable-next-line no-undef

export default function MealItem(props) {
 const cartContext =  useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
      cartContext.addItem({
          id: props.id,
          name: props.name,
          amount: amount,
          price: props.price
      })
    }
  return (
       
          <li  className="meal">
            <div><h3>{props.name}</h3>
             <div className="description">{props.description}</div>
             <div className="price">
              {price}
             </div>
            </div>
              <div>
                 <MealItemForm onAddToCart={addToCartHandler}/>
              </div>
          </li>
  )
}
