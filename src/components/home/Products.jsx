import { useLoaderData } from "react-router-dom"


function Products() {

const productData = useLoaderData()
console.log(productData)

  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 px-4" >
      {
        productData.map((product)=> (
          <div key={product.id}>
            <div className="bg-white h-auto border-[1px] border-gray-200 py-6 z-30 hover:border-transparent shadow-none hover:shadow-textShadow duration-200 relative  flex flex-col gap-4 ">
              <div className="w-full h-auto flex items-center justify-center">
                <img className="w-52 h-64 object-contain" src={product.image} alt="img product" />
              </div>
            <div className="px-4">
              <div className="flex items-center justify-between">
              <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">{product.title.substring(0, 20)}</h2>
              <p className="text-sm text-gray-600 font-semibold">${product.price}</p>
            </div>
            </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Products