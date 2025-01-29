
const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex bg-white hover:scale-102 ease-in-out duration-300 cursor-pointer border-2 border-coral-red items-center flex-col rounded-3xl p-4 shadow-3xl">
        <img src={imgURL} className="w-[200px] h-[200px]" alt="logo" />
        <h1 className="text-2xl text-coral-red font-palanquin font-bold ">{label}</h1>
        <p className="text-center text-black font-montserrat font-medium ">{subtext}</p>
    </div>
  )
}

export default ServiceCard