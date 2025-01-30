import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"
const Services = () => {
    return (
      <section className="padding-x">
          <h1 className="font-palanquin font-bold max-lg:text-[60px] mb-10 text-[80px]">Our <span className="text-coral-red ">Services</span></h1>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-10 max-lg:gap-15">
              {services.map((service,index)=><ServiceCard key={index} imgURL={service.imgURL} label={service.label} subtext={service.subtext}/> )}
          </div>
      </section>
    )
  }
  
  export default Services