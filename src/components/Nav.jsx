import { hamburger } from "../assets/icons"
import { pageLogo } from "../assets/images"
import { navLinks } from "../constants"
import Theme from "./Theme"
import SideBar from "./SideBar"
import { createContext, useState } from "react"
const SideBarContext = createContext();
export default function Nav() {
  let [value,setValue] = useState(true);
  function handleSetValue()
  {
    setValue(prevValue=>!prevValue);
  }
  
  return (
  <SideBarContext.Provider value={{value,handleSetValue}}> 
    <header className="z-10 relative padding-x bg-[#32053b] py-1">
        <nav className="flex max-container justify-between items-center">
            <a href="\" className="flex  items-center gap-2">
                <img src={pageLogo} alt="logo" width={50}/>
                <h1 className="font-bold text-2xl text-coral-red ">Snake</h1>
            </a>
            <Theme />            
            <ul className="flex items-center gap-20 max-lg:hidden">
                {navLinks.map((link,index)=>
                <li key={index}><a href={link.href}
                className="text-md font-medium font-montserrat text-white hover:text-red-400"
                >{link.label}</a></li>)}
            </ul>
            <div onClick={handleSetValue} className="cursor-pointer bg-gray-500 rounded-full lg:hidden  flex items-center justify-center max-lg:block hover:bg-gray-100 p-2">
               <img width={30} height={30} src={hamburger} alt="bars" />
            </div>
            <SideBar />
        </nav>
    </header>
  </SideBarContext.Provider>   
  )
}
export { SideBarContext };
