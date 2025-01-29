import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="padding-x padding-y">
     <div className="flex py-10 flex-row max-xl:flex-col-reverse gap-20 justify-start items-center">
        <div className="flex items-center justify-center">
          <img src={offer} className="bg-cover bg-center  w-[950px]  h-[700px] xl:w-[850px]" alt="spacial-offer" />
        </div>
        <div className="flex flex-col justify-start">
          <h1 className="capitalize font-palanquin font-bold text-[70px] ">Our <span className="text-coral-red">specail</span> offer</h1>
          <p className="xl:w-xl font-montserrat text-lg text-slate-gray ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quam sit dicta explicabo laboriosam minus, vel dolor itaque nostrum atque expedita in suscipit soluta porro natus corrupti repudiandae voluptas repellat!</p>
          <div className="flex mt-10 items-center gap-5">
            <Button>View Details</Button>
            <Button className="flex dark:text-white dark:border-white border-black items-center gap-2 border-1  px-10 py-2 rounded-full
         mt-10 text-black hover:bg-gray-300 cursor-pointer transition ease-in duration-300
       font-medium text-lg">Buy Now</Button>
          </div>
        </div>

     </div>

    </section>
  )
}

export default SpecialOffer