import { useContext } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { LoginContext } from "./Login";

const Button = () => {
    let {pageOn,toggle} = useContext(LoginContext);
    console.log(pageOn);

    return (
    <button onClick={toggle} className="w-full  text-white flex items-center justify-center gap-4  bg-coral-red text-2xl rounded-4xl cursor-pointer hover:bg-red-400 ease-in-out duration-300 py-3">
        Click Here To SubScribe {pageOn? <GoChevronUp className="text-white text-3xl"/>: <GoChevronDown className="text-white text-3xl"/>}
    </button>
  )
}

export default Button