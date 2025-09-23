import { useLoaderData } from "react-router-dom"


function Products() {

const productData = useLoaderData()

  console.log(productData)

  return (
    <div>Products</div>
  )
}

export default Products