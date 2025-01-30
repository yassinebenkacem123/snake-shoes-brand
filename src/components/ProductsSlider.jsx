import { star } from "../assets/icons"

// eslint-disable-next-line react/prop-types
const ProductsSlider = ({shoe, shoeName, shoePrice}) => {
  return (
    <div className="max-lg:w-[250px] w-[300px] h-[300px] bg-white border-2 border-coral-red ml-5 shadow-xl  items-start gap-2 cursor-pointer rounded-xl overflow-hidden hover:scale-102 ease-in-out duration-300  inline-block ">
        <div className="bg-card bg-cover bg-center flex justify-center items-center p-2  w-full ">
            <img src={shoe} alt="shoe" className="h-[180px] w-full" />
        </div>
        <div className="flex  ml-3 mt-3 items-center gap-2">
            <img src={star} alt="start" />
            <p className="text-black">(4.5)</p>
        </div>
        <h1 className="ml-3 text-black mt-1 text-[20px] font-bold">{shoeName}</h1>
        <p className="ml-3 text-coral-red mt-1">{shoePrice}</p>
    </div>
  )
}

export default ProductsSlider