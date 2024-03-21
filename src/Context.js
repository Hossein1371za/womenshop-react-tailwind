import React,{createContext,useState} from "react";
import { productData } from "./componenets/home/product/ProductsData";





export const DataContext = createContext()

export const DataProvider = (props)=>{
    
    const [products,setProducts] = useState(productData)
    
   
    

const value={
    products: [products, setProducts],

}

    return(
        <DataContext.Provider value={value}>
        {props.children}
        </DataContext.Provider>
    )
}