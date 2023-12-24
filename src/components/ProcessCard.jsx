

const ProcessCard = ({number, title, text}) => {
  return (
    <div className="px-20 lgg:px-8 mdd:px-5 py-20 lgg:py-20 mdd:py-16 border border-greyAccent-400 w-1/2 ssm:w-full flex items-center">
      <div className="text-greyAccent-800">
        <div className="flex gap-3 items-center">
          <div className="text-[150px] lgg:text-[120px] mdd:text-[80px] ssm:text-[100px] text-greenAccent-400 font-semibold">{number}</div>
          <div className=" grow pb-6 border-b border-greyAccent-400 font-medium text-2xl mdd:text-lg ssm:text-2xl pt-12">{title}</div>
        </div>
        <div className="mdd:text-sm">{text}</div>
      </div>
    </div>
  )
}

export default ProcessCard;