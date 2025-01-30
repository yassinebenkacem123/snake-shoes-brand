
import { useContext } from "react";
import { GoPerson } from "react-icons/go";
import { GoPersonFill } from "react-icons/go";
import { GoPasskeyFill } from "react-icons/go";
import { LoginContext } from "./Login";
const Content = () => {
   let {pageOn} = useContext(LoginContext)
    return ( pageOn?
    <form className="w-full max-xl:w-[600px] py-10 mt-3 flex items-center rounded-2xl flex-col gap-5 dark:bg-gray-300 bg-black">
        <div className=" mt-10 dark:bg-black bg-white rounded-full max-xl:p-5 p-10">
            <GoPerson  className="max-xl:text-xl text-4xl"/>
        </div>
        <div className="w-full px-25 gap-10 flex flex-col">
            <div className="dark:text-black bg-white flex gap-4 items-center max-xl:p-2 p-4  rounded-4xl ">
                <GoPersonFill className=" max-xl:text-2xl text-3xl"/>
                <input type="text" required className="p-2 w-[90%] border-none outline-none text-2xl font-medium" placeholder="user name" />
            </div>
            <div className="bg-white max-xl:p-2 dark:text-black flex gap-4 items-center  p-4  rounded-4xl ">
                <GoPasskeyFill className="text-3xl max-xl:text-2xl"/><input type="password" className="p-2 w-[90%] border-none outline-none text-2xl font-medium" placeholder="user password" />
            </div>
        </div>
        <div 
        className="
         flex items-center p-2
         gap-30">
            <label htmlFor="check"  className="dark:text-black flex text-lg text-white gap-2 items-center">
               <input id="check" className="w-5 h-5"  type="checkbox" />
               Remember me
            </label>
            <a href="#" className="text-lg text-coral-red underline ">Forget password ?</a>
            
        </div>
        <button
         className="bg-coral-red cursor-pointer max-xl:py-3  hover:bg-red-400 max-xl:text-lg text-white py-4 rounded-4xl text-2xl  mt-10 px-30 max-xl:px-20">Login</button>
        
    </form>:null
  )
}

export default Content