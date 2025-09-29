import { div } from "framer-motion/client"
import { useSelector } from "react-redux"

function Cart() {

    const products = useSelector(state => state.products)

  return (
    <div className="w-full bg-gray-100 p-4">
        <div className="  grid grid-cols-5 gap-8 h-auto ">
            <div className="col-span-4 px-4 bg-white">
                <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3 ">
                    <h2 className="text-3xl font-medium">Shopping Cart</h2>
                    <h4 className="text1x
                     font-normal">Subtitle</h4>
                </div>

                <div>
                    {products.map(item => (
                        <div key={item.id} className="w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6">
                            <div className="w-1/5 ">
                                <img className="w-full h-44 object-contain" src={item.image} alt="product img" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-lg">{item.title}</h2>
                                <p className="pr-10 text-sm">{item.description}</p>
                                <p className="text-base">Unit Price: <span className="font-semibold">${item.price}</span></p>
                                <div className="bg-[#f0f2f2] flex items-center justify-center  gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md ">
                                    <p>Qty: </p>
                                    <p className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300">-</p>
                                    <p>{item.quantity}</p>
                                    <p className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300">+</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-span-1 px-4 bg-white"></div>
        </div>
    </div>
  )
}

export default Cart