
function FooterTop() {
  return (
    <div className="w-full bg-white py-6 ">
        <div className="w-full border-t-[1px] border-b-[1px] py-6 ">
            <div className="w-64 mx-auto text-center flex flex-col gap-0.5 ">
                <p className="text-sm">See Personalised Recommendations</p>
                <button className="w-full bg-yellow-400 rounded-md py-1 font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 ">Sign In</button>
                <p className="text-sm ">New Customer? <span>Start here.</span></p>
            </div>
        </div>
    </div>
  )
}

export default FooterTop