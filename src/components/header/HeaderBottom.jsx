import { motion } from 'framer-motion';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


import { useEffect, useRef, useState } from 'react';
import SideNavContent from './SideNavContent';

function HeaderBottom() {

    const [sidebar, setSideBar] = useState(false)
    const ref = useRef()

    useEffect(()=>{
        document.body.addEventListener("click", (e)=>{
            if(e.target.contains(ref.current)){
                setSideBar(false)
            }
        })
    },[])

  return (
    <div className='w-full px-4 bg-amazon_light h-[36px] text-white flex items-center'>
        <ul className='flex items-center gap-2 text-sm tracking-wide'>
            <li onClick={()=>setSideBar(prev => !prev)} className='headerHover gap-2'><MenuIcon/> All</li>
            <li className='headerHover'>Today's Deals</li>
            <li className='headerHover'>Customer Service</li>
            <li className='headerHover'>Gift Cards</li>
            <li className='headerHover'>Registy</li>
            <li className='headerHover'>Sell</li>
        </ul>
        {sidebar && (
            <div  className='w-full h-screen bg-amazon_blue fixed top-0 left-0 bg-opacity-50 '>
                <div className='w-full h-full relative'>
                    <motion.div ref={ref} initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5, }} className=" w-[350px] h-full bg-white border border-black">
                        <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
                            <AccountCircleIcon />
                            <h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello, Sign In</h3>
                        </div>
                        <SideNavContent title="Digital Content & Devicea" one="Amazon Music" two="Kindle E-readers & Books" three="Amazone Appstore" />
                        <SideNavContent title="Shop by Department" one="Electronics" two="Computers" three="Smart Home" />
                        <SideNavContent title="Programs & Features" one="Give a gift card" two="Amazon Live" three="International Shopping" />
                        <SideNavContent title="Help & Settings" one="Your Account" two="Customer Service" three="Contact us" />
                    <span onClick={()=>setSideBar(prev=> !prev)} className='absolute top-0 left-[360px] cursor-pointer w-10 h-10 text-black bg-gray-200 flex items-center justify-center hover:bg-red-500 hover:text-white border duration-300'><CloseIcon /></span>
                    </motion.div>
                </div>
            </div>
        )}
    </div>
  )
}

export default HeaderBottom
