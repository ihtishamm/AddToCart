import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 import './HeaderCart.css'
import { useContext } from 'react';
import CartContext from '../../Store/CartContext';

  

// eslint-disable-next-line react/prop-types
function HeaderCart({onClick}) {

   const contextIT = useContext(CartContext);
   const NumberOFCartItem =  contextIT.items.reduce((numberX, item) => {
        return numberX + item.amount
     },0)
    
  return (
        <button className='button' onClick={onClick}>
            <span>
             <ShoppingCartIcon/>
            </span>
            <span>
            Your Cart
            </span>
            <span className='badge'>
                 {NumberOFCartItem}
            </span>
        </button>
  )
}

export default HeaderCart;
