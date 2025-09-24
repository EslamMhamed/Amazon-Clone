import {darkLogo} from "../assets/index"

import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Signin() {
  return (
    <div className="w-full ">
        <div className="w-full bg-gray-100 pb-10">
            <form className="w-[350px] mx-auto flex flex-col items-center  ">
                <img  src={darkLogo} alt="dark logo" className="w-32 " />
                <div className="w-full border border-zinc-200 p-6">
                    <h2 className="font-titleFont text-3xl font-medium mb-4">Sign in</h2>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium">Email or Mobile phone number</p>
                            <input className="w-full lowercase py-1 border border-zinc-400 px-2 text-balance rounded-sm outline-none focus:border-[#e77600] focus:shadow-amazonInput duration-100 "  type="email"  />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium">Password</p>
                            <input className="w-full lowercase py-1 border border-zinc-400 px-2 text-balance rounded-sm outline-none focus:border-[#e77600] focus:shadow-amazonInput duration-100 "  type="password"  />
                        </div>
                        <button type="button" className="w-full text-sm py-1.5 font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-y-red-800 active:shadow-amazonInput ">Continue</button>
                    </div>
                    <p className="text-xs text-black leading-4 mt-4
                    ">By continuing, you agree to Amazon's <span className="text-blue-600">Conditions of Use  </span > and <span className="text-blue-600">Privacy Notice.</span></p>
                    <p className="text-xs text-gray-600 mt-4 cursor-pointer group"><ArrowRightIcon /> <span className="text-blue-600 group-hover:text-orange-700  group-hover:underline">Need help?</span></p>
                </div>
                <div className="flex items-center mt-4 text-gray-600 w-full text-sm">
                    <span className=" w-1/3 h-[1px] bg-zinc-400 "></span>
                    <span className="w-1/3 text-center">New to Amazon?</span>
                    <span className=" w-1/3 h-[1px] bg-zinc-400  "></span>
                    
                </div>
                <button type="button" className="w-full font-normal mt-4 text-sm rounded-sm bg-gradient-to-t hover:bg-gradient-to-b from-slate-200 to-slate-100 py-1.5 border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput">Create your Amazon account</button>
            </form>
        </div>
        <div className="w-full bg-gradient-to-t from-white via-white to-zinc-200 h-20 flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-6 ">
                <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">Conditions of Use</p>
                <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">Privacy Notice</p>
                <p className="text-xs text-blue-600 hover:text-orange-600 hover:underline underline-offset-1 cursor-pointer duration-100">Help</p>
            </div>
            <p className="text-xs text-gray-600">© 1996-2025, Amazon.com, Inc. or its affiliates</p>
        </div>
    </div>
  )
}

export default Signin