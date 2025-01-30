import { reviews } from "../constants"
import CustomerCard from "../components/CustomerCard"
const CustomerReviews = () => {
  return (
    <section className="padding-x padding-y bg-slate-200">
      <div className="flex  flex-col items-center ">
        <h1 className="text-black max-lg:text-[55px] font-bold text-[75px] font-palanquin">What our <span className="text-coral-red">customers</span> say</h1>
        <p className="text-center max-lg:text-lg w-3xsl text-xl text-slate-gray font-montserrat mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa porro sequi sapiente sint eveniet cumque delectus ea obcaecati totam atque, nam vitae doloribus deleniti accusantium cum excepturi corporis commodi minus!</p>
        <div className="flex gap-10 flex-row max-xl:flex-wrap ">
          {reviews.map((customerReview,index)=>
           <CustomerCard  key={index} customerFace={customerReview.imgURL} 
           customerFeadback={customerReview.feedback}
           customerRating={customerReview.rating}
           customerName={customerReview.customerName}
            />
          )}
        </div>
      </div>

    </section>
  )
}

export default CustomerReviews
