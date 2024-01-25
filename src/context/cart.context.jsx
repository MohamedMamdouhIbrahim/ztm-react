import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen: ()=>{}
});

export default function CartProvider({children})
{
    const [isCartOpen,setIsCartOpen]=useState();
    const value = {isCartOpen,setIsCartOpen};

    return(    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>)
}