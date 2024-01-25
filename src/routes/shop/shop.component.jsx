import { useContext } from "react";
import { ShopContext } from "../../context/shop.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss"
export default  function Shop()
{
    console.log("shop component");
    const {products}  = useContext(ShopContext);
    return(<div className="product-container">
        {products.map((product)=>
        {
            return(
            <ProductCard key={product.id} product={product} />

            )
        })}

    </div>);
}