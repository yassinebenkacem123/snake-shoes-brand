
// eslint-disable-next-line react/prop-types
const ShoeCard = ({imgURL,alter,hanldeBigShoe,currentShoe}) => {
  return (
    <div onClick={()=>{hanldeBigShoe(imgURL)}} className={`bg-card p-2 cursor-pointer ${currentShoe===imgURL? "border-2 border-coral-red":""} bg-cover bg-center rounded-2xl`}>
        <img src={imgURL} width={130} alt={alter} />
    </div>
  )
}

export default ShoeCard