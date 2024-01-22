
import {Outlet,Link } from "react-router-dom";
 
import {ReactComponent as Logo} from "../assets/crown.svg"
import "./navigation.styles.scss"
import { useContext } from "react";
import { UserContext } from "../context/user.context";
import { signOutUser } from "../utilities/firebase/firebase.utility";

const NavigationBar = ()=>{
    

   const {currentUser} = useContext(UserContext);

    
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

    </div>
  </div>
  <Outlet/>
  </>
  )}

  export default NavigationBar