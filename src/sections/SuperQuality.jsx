import {shoe8} from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section className="padding-y gap-10 flex items-center xl:flex-row flex-col ">
        <div className="padding-x">
            <h1 className="font-palanquin font-bold text-[60px]">We provide you <span className="text-coral-red capitalize">super quality</span> shoes</h1>
            <p className="text-lg xl:w-xl text-slate-gray">Step into Excellence Handcrafted Shoes Designed for Durability, Comfort, and Timeless Style. Your Feet Deserve the Best</p>
            <Button>View Details</Button>
        </div>
        <img src={shoe8} className="w-[800px] max-xl:w-[600px]" alt="specail offer"  />
    </section>
  )
}
export default SuperQuality