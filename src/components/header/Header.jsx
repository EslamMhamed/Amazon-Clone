import { LocationOnOutlined } from "@mui/icons-material";
import {logo} from "../../assets/index"
import AddLocationIcon from '@mui/icons-material/AddLocation';



function Header() {
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

      </div>
    </div>
  )
}

export default Header