
import {Outlet,Link } from "react-router-dom";
 
import {ReactComponent as Logo} from "../assets/crown.svg"
import "./navigation.styles.scss"
import { useContext } from "react";
import { UserContext } from "../context/user.context";
import { signOutUser } from "../utilities/firebase/firebase.utility";
import CartIcon from "../components/cart-icon/cart-icon.component";
import CartDropDown from "../components/cart-dropdown/card-dropdown.component";
import { CartContext } from "../context/cart.context";
const NavigationBar = ()=>{
    

   const {currentUser} = useContext(UserContext);
   const {isCartOpen} = useContext(CartContext);
    
    return(
    <>
  <div className="navigation">
    <Link className="logo-container" to="/">
        <div>
            <Logo/>
        </div>
    </Link>
    
    <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
            shop
        </Link>
       {
        currentUser ?
         (<span onClick={signOutUser}>SIGN OUT</span>) 
        :
         (<Link className="nav-link" to="/auth">sign in </Link>)
       }

       <CartIcon />
    </div>
    {isCartOpen && <CartDropDown/>}
  </div>
  <Outlet/>
  </>
  )}

  export default NavigationBar