import { Link } from "react-router-dom";
import {darkLogo} from "../assets/index"

import ArrowRightIcon from '@mui/icons-material/ArrowRight';


function Registration() {
  return (
    <div className="w-full">
      <div className="bg-gray-100 pb-10 ">
        <form className="flex items-center flex-col w-[370px] mx-auto ">
          <img src={darkLogo} alt="logo" className="w-32" />
          <div className="border-zinc-200 p-6 border w-full">
            <h2 className="text-3xl font-titleFont font-medium mb-4">Create Acount </h2>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration