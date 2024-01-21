
import {Outlet,Link } from "react-router-dom";
import {ReactComponent as Logo} from "../assets/crown.svg"
import "./navigation.styles.scss"
const NavigationBar = ()=>{return(
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
        <Link className="nav-link" to="/auth">
            sign in
        </Link>
    </div>
  </div>
  <Outlet/>
  </>
  )}

  export default NavigationBar