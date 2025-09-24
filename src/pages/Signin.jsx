import {darkLogo} from "../assets/index"

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
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signin