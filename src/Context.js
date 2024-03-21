import React,{createContext,useState} from "react";
import { productData } from "./componenets/home/product/ProductsData";
import { useParams } from "react-router-dom";




export const DataContext = createContext()

export const DataProvider = (props)=>{
    const {id} = useParams()
    const [products,setProducts] = useState(productData)
    const product = products.find((item) => item.id !== id);
    console.log(product)
    

const value={
    products: [products, setProducts],
    product,
}

    return(
        <DataContext.Provider value={value}>
        {props.children}
        </DataContext.Provider>
    )
}