import { bigShoe1 } from "../assets/images"
import { shoes, statistics } from "../constants"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"
import Button from "../components/Button"
import { GoArrowRight } from "react-icons/go";
import StatisticCard from "../components/StatisticCard"
const Hero = () => {
  let [bigShoe,setBigShoe] = useState(bigShoe1);
  function hanldeBigShoe(newShoe)
  {
    setBigShoe(newShoe);
  }
  return (
    <section id="home"
    className="mb-20 max-lg:mt-10  relative max-xl:gap-10 right-0  lg:flex-row flex flex-col justify-center items-center min-h-screen  gap-10 w-full">
      <div className=" px-10  flex flex-col items-start  xl:w-[50%] w-full">
        <p 
          className="text-coral-red mb-2 font-bold  font-montserrat text-xl
          max-lg:text-lg
          ">
          Our Summer Collection</p>
        <h1 className="capitalize text-[80px] mb-3 font-palanquin leading-25 font-bold
         max-lg:text-4xl
        " >The new arrival <span className="text-coral-red">snake</span> shoes</h1>
        <p className="font-medium text-gray-500 font-montserrat text-md
        max-lg:text-[13px]
        ">Discover Snake arrival quality comfort and innovation for your active life</p>        
        <Button>
          Shop Now <GoArrowRight className="text-coral-red bg-white rounded-full" />
        </Button>
        <div 
          className="flex mt-20 flex-row gap-4 items-center w-full  justify-around max-lg:flex-wrap">
          {statistics.map((statistic,index)=><StatisticCard key={index} label={statistic.label} value={statistic.value} />)}
        </div>
      </div>
      <div className="bg-hero  bg-cover  min-h-screen xl:w-[50%] flex flex-col justify-center items-center bg-center w-full">
        <img  width={600} src={bigShoe} />
        <div className="flex gap-10 absolute -bottom-10 max-xl:-bottom-20">
          {shoes.map((shoe,index)=> 
           <ShoeCard  key={index} imgURL={shoe.bigShoe} alter={shoe.thumbnail} currentShoe={bigShoe} hanldeBigShoe={hanldeBigShoe}/>

          )}
        </div>
      </div>
    </section>
    
  )
}

export default Hero