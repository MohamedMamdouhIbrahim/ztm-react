import "./product-card.styles.scss"
import Button from "../button/Button.component"
export default function ProductCard({product}){
 const {id,imageUrl,name,price} = product

    return(

        <div key={id} className="product-card-container">
            <img src={imageUrl} alt="product image" />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted"></Button>
        </div>

    );
}