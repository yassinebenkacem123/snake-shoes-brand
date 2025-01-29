import { star } from "../assets/icons"

// eslint-disable-next-line react/prop-types
const CustomerCard = ({customerFace,customerFeadback,customerRating,customerName}) => {
  return (
    <div className="flex flex-col items-center gap-5 mt-10">
        <img className="w-30 rounded-full" src={customerFace} alt="customer face" />
        <p className="dark:text-black text-xl font-montserrat text-center ">{customerFeadback}</p>
        <div className="flex items-center  gap-4 ">
            <img width={30} src={star} alt="star" />
            <p className="dark:text-black font-medium text-lg">({customerRating})</p>
        </div>
        <h1 className="dark:text-black font-bold text-2xl">{customerName}</h1>
    </div>
  )
}

export default CustomerCard