import { bdFlag, logo } from "../../assets"
import { footerMiddleList } from "../../constants"

function FooterMiddle() {
  return (
    <div className="w-full bg-amazon_light text-white">
        <div className="w-full py-10 border-b-[1px] border-gray-500 ">
            <div className="max-w-5xl mx-auto text-gray-300 ">
                <div className="grid grid-cols-4 place-items-center items-start  ">
                    {footerMiddleList.map((item, index)=> (
                    <div key={index}>
                        <h3 className="font-titleFont text-white text-base font-semibold mb-3">{item.title}</h3>
                        {item.items.map((items,i)=> (
                            <ul key={i} className="flex flex-col gap-2 font-bodyFont">
                                <li className="footerLink">{items}</li>
                            </ul>
                            ))}
                    </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="w-full flex gap-6 items-center justify-center py-6 ">
            <div>
                <img src={logo} alt="logo" className="w-20 pt-3" />
            </div>
            <div className="flex gap-2">
                <p className=" border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">English</p>
            </div>
            <div className="border border-gray-500 py-1 px-2 hover:border-amazon_yellow flex gap-1 items-center justify-center cursor-pointer duration-200">
                <img src={bdFlag} alt="flag" className="w-6" />
                <p>Egypt</p>
            </div>
        </div>
    </div>
  )
}

export default FooterMiddle
