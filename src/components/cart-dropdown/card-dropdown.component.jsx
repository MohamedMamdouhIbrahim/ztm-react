import Button from "../button/Button.component"
import "./card-dropdown.styles.scss"

export default function CartDropDown()
{
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items"/>
            <Button>Go to CHECKOUT</Button>
            
        </div>
    );
}