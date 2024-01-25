import "./cart-item.styles.scss";
export default function CartItem({cartItem})
{
    const {name} = cartItem;
    return(
        <div>
            <h2>{name}</h2>
        </div>
    )
}
