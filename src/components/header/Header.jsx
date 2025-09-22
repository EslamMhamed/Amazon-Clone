import {logo} from "../../assets/index"

import { ArrowDropDownOutlined, LocationOnOutlined } from "@mui/icons-material";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { allItems } from "../../constants";


function Header() {
  const [showAll, setShowAll] = useState(false)

  return (
   <div>
     <div className='w-full bg-amazon_blue px-4 py-3 text-white flex items-center gap-4'>
        <div className="headerHover ">
         <img src={logo} alt="logo" className="w-24 mt-2" />
        </div>

        <div  className="headerHover gap-0.5 ">
          <LocationOnOutlined />
          <p className="text-sm font-light text-lightText">Deliver to <span className="block text-center text-white font-semibold -mt-1">Egypt</span></p>
        </div>

        <div className="flex flex-grow rounded-md h-10 relative">
          <span onClick={()=> setShowAll(prev => !prev)} className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont  w-14 h-full rounded-tl-md rounded-bl-md   ">
            All <span><ArrowDropDownOutlined /></span>
          </span>
          {showAll && (
            <div >
              <ul className="absolute top-10 left-0 w-56 h-80 bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50 overflow-y-scroll overflow-x-hidden">
                {allItems.map(item => (
                  <li className=" border-b-[1px] border-transparent hover:border-amazon_blue cursor-pointer text-sm font-titleFont duration-300 " key={item._id}>{item.title}</li>
                ))}
              </ul>
            </div>
          )}
          <input type="text" className="border-none outline-none h-full text-base text-amazon_blue flex-grow pl-2" 
          placeholder="Search Amazon" />
          <span className="w-12 h-full bg-amazon_yellow flex items-center justify-center hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>

        <div className="headerHover flex-col items-start justify-center ">
          <p className="text-xs text-lightText font-light">Hello, Sign in </p>
          <p className="text-xs font-semibold -mt-1 text-whiteText">Accounts & Lists 
            <span><ArrowDropDownOutlined/></span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Header