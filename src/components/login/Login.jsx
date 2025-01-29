import { createContext, useState } from "react"
const LoginContext = createContext();
// eslint-disable-next-line react/prop-types
const Login = ({children}) => {
    let [pageOn,setPageOn] = useState(false);
    function toggle()
    {
        setPageOn(pageOn=>!pageOn);
    }
   
  return (
    <LoginContext.Provider value={{pageOn,toggle}}>
        <div className="p-3 w-[60%] flex flex-col items-center">
            {children}
        </div>
    </LoginContext.Provider>
  )
}

export default Login 
export {LoginContext}