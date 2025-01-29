import { products } from "../constants"
import ProductsSlider from "../components/ProductsSlider"
import {MdChevronLeft,MdChevronRight} from "react-icons/md"
const PopularProducts = () => {
  const sliderLeft = ()=>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const sliderRight = ()=>{
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <section className="mt-50 flex flex-col gap-14">
      <div className="padding-x">
        <h1 className="font-palanquin font-bold text-[80px]">Our <span className="text-coral-red ">Popular</span> Products</h1>
        <p className="text-lg text-slate-gray">Discover our latest shoes collection designed for comfort, performance, and bold looks</p>
      </div>
      <section id="products" className="relative flex items-center">
        <div></div>
        <MdChevronLeft className="mr-2 ml-2 cursor-pointer text-coral-red bg-gray-300 rounded-full opacity-80 hover:opacity-100" onClick={sliderLeft} size={40} />
        <div id="slider"  className="w-full p-4 h-full  scrol overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
          {products.map((product,index)=> <ProductsSlider key={index} shoe={product.imgURL} shoeName={product.name} shoePrice={product.price} />)}
        </div>
        <MdChevronRight className="ml-2 text-coral-red opacity-80 bg-gray-300 rounded-full hover:opacity-100 cursor-pointer" onClick={sliderRight} size={40} /> 
        
      </section>
    </section>
  )
}

export default PopularProducts