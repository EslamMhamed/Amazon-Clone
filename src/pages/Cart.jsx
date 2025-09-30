import { useDispatch, useSelector } from "react-redux"

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useEffect, useState } from "react";
import { amazonActions } from "../redux/amazonSlice";

function Cart() {

    const products = useSelector(state => state.products)
    const [totalPrice, setTotalPrice] = useState(0)

    const dispatch = useDispatch()

    useEffect(()=>{
        let total = 0
        products.map(item => {
            total += item.price * item.quantity
            
            return setTotalPrice(total.toFixed(2))}
        )
    },[products])

  return (
    <div className="w-full bg-gray-100 p-4">
        <div className="  grid grid-cols-5 gap-8 h-auto ">
            <div className="col-span-4 px-4 bg-white ">
                <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3 ">
                    <h2 className="text-3xl font-medium">Shopping Cart</h2>
                    <h4 className="text1x
                     font-normal">Subtitle</h4>
                </div>

                <div>
                    {products.map(item => (
                        <div key={item.id} className="w-full border-b-[1px] border-b-gray-300 p-4 flex items-center  gap-6  ">
                            <div className="w-1/5 ">
                                <img className="w-full h-44 object-contain" src={item.image} alt="product img" />
                            </div>
                            <div className="w-3/5">
                                <h2 className="font-semibold text-lg">{item.title}</h2>
                                <p className="pr-10 text-sm">{item.description.substring(0,200)}</p>
                                <p className="text-base">Unit Price: <span className="font-semibold">${item.price}</span></p>
                                <div className="bg-[#f0f2f2] flex items-center justify-center  gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md ">
                                    <p>Qty: </p>
                                    <p onClick={()=> dispatch(amazonActions.decrementQuantity(item.id))} className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300">-</p>
                                    <p>{item.quantity}</p>
                                    <p onClick={()=> dispatch(amazonActions.incrementQuantity(item.id))} className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300">+</p>
                                </div>
                                <button onClick={()=> dispatch(amazonActions.deleteItem(item.id))} className="bg-red-500 w-36 rounded-lg py-1 text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300">Delete Item</button>
                            </div>
                            <div className="w-1/5   text-end  ">
                                <p className="text-lg font-titleFont font-semibold">${item.price * item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="py-2">
                    <button onClick={()=> dispatch(amazonActions.resetCart())} className="px-10  py-2  bg-red-500 hover:bg-red-600 active:bg-red-500 text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide">Clear Cart</button>
                </div>
            </div>
            <div className="col-span-1 h-52 px-4 bg-white flex flex-col items-center p-4 justify-center ">
                <div >
                    <p className="flex items-start gap-2 text-sm"> <span className="text-green-500 rounded-full bg-white" ><CheckCircleIcon /></span>
                         Your order qualifies for FREE Shipping Choose this option at checkout. See details...
                    </p>
                </div>
                <div className="font-semibold px-10 py-1 flex items-center justify-between ">
                    <p className="font-semibold px-10 py-1 flex items-center gap-2 justify-between">Total: <span className="text-lg font-bold">${totalPrice}</span></p>
                </div>
                <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border border-yellow-500 hover:from-yellow-300 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">Proceed to Pay</button>
            </div>
        </div>
    </div>
  )
}

export default Cart