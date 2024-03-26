
 import './Header.css'
 import HeaderCart from './HeaderCart';

 // eslint-disable-next-line react/prop-types
 function Header({onShowCart}) {
  return (
 <>
     <div className="header">
        <h1>Add To Cart</h1>
       <HeaderCart onClick={onShowCart} />
        </div> 
        <div className="main-image">
              <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
        </div>
  </>
  )
}
 
 export default Header;
