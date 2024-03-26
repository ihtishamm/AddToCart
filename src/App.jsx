
import './App.css'
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Meals from './Components/Meels/Meals';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';

function App() {
   const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
      setShowCart(true);
    }

      const HideCartHandler = () => {
        setShowCart(false);
      }
   
 
  return (
    <CartProvider>
    { showCart &&  <Cart   onHideCart={HideCartHandler}/>}
    <Header  onShowCart={showCartHandler}  />
    <main>
      <Meals/>
    </main>
    </CartProvider>
  ) 
}
    
export default App;
