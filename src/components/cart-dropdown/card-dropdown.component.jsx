import Button from "../button/Button.component"
import "./card-dropdown.styles.scss"
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";

export default function CartDropDown()
{
    const {cartItems} = useContext(CartContext);
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(
                    (item)=><CartItem key={item.id} cartItem={item}/>)
                    }
            </div>
            <Button>Go to CHECKOUT</Button>
            
        </div>
    );
}