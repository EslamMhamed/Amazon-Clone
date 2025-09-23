import { footerBottomItem } from "../../constants"

function FooterBottom() {
  return (
    <div className="w-full bg-footerBottom py-8">
        <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-7 items-start place-content-center gap-3 text-gray-400 ">
                {footerBottomItem.map((item, index)=> (
                    <div className="group cursor-pointer" key={index}>
                        <h3 className="footerBottomTitle">{item.title}</h3>
                        <p className="footerBottomText">{item.des}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FooterBottom
