

const ServiceCard = ({img, title}) => {
  return (
        <div className="flex flex-col p-8 lgg:p-4 gap-4 border-r border-greyAccent-400 w-[25%] mdd:w-1/2 mdd:border-b">
            <div className='p-6 border border-[#333] rounded-md h-20 w-20 ssm:h-12 ssm:w-12 ssm:p-3 grid place-content-center'>
            <img src={img} alt=""/>
            </div>
            <p className="text-greyAccent-900 ssm:text-xs">{title}</p>
        </div>
  )
}

export default ServiceCard;