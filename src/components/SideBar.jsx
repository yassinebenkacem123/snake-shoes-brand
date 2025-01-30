import { useContext } from "react";
import { navLinks } from "../constants"
import { FiXCircle } from "react-icons/fi";
import { SideBarContext } from './Nav.jsx';
const SideBar = () => {
    let {value,handleSetValue} = useContext(SideBarContext);
  return (
    < div 
    className={`h-screen scroll-smooth lg:hidden ${value?"hidden":"block"} z-100 fixed p-10 right-0 transition ease duration-800 bottom-0 bg-coral-red w-[30%]`}>
        <FiXCircle onClick={()=>handleSetValue()} className="text-2xl cursor-pointer rounded-full relative text-white bottom-4"/>
        <ul className="flex w-full h-full gap-8 flex-col ">
            {navLinks.map((link,index)=>
            <li key={index}>
                <a className="text-lg font-medium font-montserrat hover:text-black text-white" href={link.href}>{link.label}</a>
            </li>)}
        </ul>
    </div>
  )
}

export default SideBar