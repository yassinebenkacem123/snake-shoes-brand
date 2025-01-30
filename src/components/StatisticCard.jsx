// eslint-disable-next-line react/prop-types
const StatisticCard = ({label,value}) => {
  return (
    <div className="flex gap-1 flex-col justify-center px-7 py-7">
        <h1 className="text-3xl font-palanquin font-bold
        max-lg:text-xl">{value}</h1>
        <p className="text-lg font-montserrat font-medium
        max-lg:text-md">{label}</p>
    </div>
  )
}

export default StatisticCard