import axios from "axios"


export async function productsData() {
    const products = await axios.get("https://fakestoreapiserver.reactbd.org/api/amazonproducts")
    
    return products.data.data
}

