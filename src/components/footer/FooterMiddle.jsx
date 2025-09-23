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
    </div>
  )
}

export default FooterMiddle
