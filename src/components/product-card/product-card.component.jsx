import "./product-card.styles.scss"
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/Button.component"
export default function ProductCard({product}){
 const {id,imageUrl,name,price} = product
const {addItemToCart} = useContext(CartContext);
const addProductToCart=()=>addItemToCart(product)
    return(

        <div key={id} className="product-card-container">
            <img src={imageUrl} alt="product image" />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={addProductToCart}>Add ToCart</Button>
        </div>

    );
}