// eslint-disable-next-line react/prop-types
const Button = ({children,className}) => {
 
  if(className)
  {
    return(
      <button 
      className={className}
      >
        {children}
      </button>
    )
  }else{
    return(
      <button 
      className="flex items-center gap-2 bg-coral-red px-5 py-2 rounded-full
       text-white mt-10 hover:bg-red-300 cursor-pointer transition ease-in duration-300
       font-medium text-lg"
      >
          {children}
      </button>
    )
  }
  

   
}

export default Button