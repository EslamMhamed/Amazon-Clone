import { Link } from "react-router-dom";
import {darkLogo} from "../assets/index"

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from "react";


function Registration() {

  const [email, seEmail]= useState("")
  const [password, setPassword]= useState("")
  const [rePassword, setRePassword]= useState("")

  return (
    <div className="w-full">
      <div className="bg-gray-100 pb-10 ">
        <form className="flex items-center flex-col w-[370px] mx-auto ">
          <img src={darkLogo} alt="logo" className="w-32" />
          <div className="border-zinc-200 p-6 border w-full">
            <h2 className="text-3xl font-titleFont font-medium mb-4">Create Acount </h2>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your name</p>
                <input type="text" className="w-full lowercase py-1 border border-zinc-400 px-2 text-balance rounded-sm outline-none focus:border-[#e77600] focus:shadow-amazonInput duration-100 "    />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Email or mobile phone number</p>
                <input type="email"
                value={email}
                onChange={(e)=> seEmail(e.target.value)}
                className="w-full lowercase py-1 border border-zinc-400 px-2 text-balance rounded-sm outline-none focus:border-[#e77600] focus:shadow-amazonInput duration-100 "    />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                className="w-full lowercase py-1 border border-zinc-400 px-2 text-balance rounded-sm outline-none focus:border-[#e77600] focus:shadow-amazonInput duration-100 "    />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Re-enter Password</p>
                <input type="password"
                value={rePassword}
                onChange={(e)=> setRePassword(e.target.value)}
                className="w-full lowercase py-1 border border-zinc-400 px-2 text-balance rounded-sm outline-none focus:border-[#e77600] focus:shadow-amazonInput duration-100 "    />
                <p className="text-xs text-gray-600">Passwords must be at least 6 characters.</p>
              </div>
              <button type="button" className="w-full text-sm py-1.5 font-normal rounded-sm bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-amazonInput ">Continue</button>
            </div>
            <p className="text-xs text-black leading-4 mt-4">By creating an account, you agree to Amazon's <span className="text-blue-600 cursor-pointer">Conditions of Use  </span > and <span className="text-blue-600 cursor-pointer">Privacy Notice.</span>
            </p>
            <div className="">
              <p className="text-xs text-black">Already a customer? 
                <Link to="/signin" >ذ
                <span className="text-blue-600 hover:text-orange-700  hover:underline cursor-pointer">Sign in instead</span> <span ><ArrowRightIcon /></span>
                </Link>
              </p>
              <p className="text-xs text-black -mt-2">Buying for work? <span className="text-blue-600 hover:text-orange-700  hover:underline cursor-pointer">Create a free business acount</span></p>
            </div>
          </div>
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

export default Registration