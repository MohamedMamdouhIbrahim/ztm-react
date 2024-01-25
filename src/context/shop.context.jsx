import { createContext,useState } from "react";
import data from "../shop-data.json";

export const ShopContext = createContext({products:[]});

export const ShopProvider = ({children})=>{
    const [products,setProducts] = useState(data);
    const value = {products};  
    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}