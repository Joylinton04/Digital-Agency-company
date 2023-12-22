import container from "../assets/servicespage/container.svg"
import work from '../assets/work/work.svg'
import boutique from '../assets/work/boutique.svg'
import direct from '../assets/work/direct.svg'
import hungryBite from '../assets/work/hungaryBite.svg'
import eventmaster from '../assets/work/eventmaster.svg'
import protech from '../assets/work/protech.svg'
import dreamhome from '../assets/work/dreamhome.svg'
import fitlife from '../assets/work/fitlife.svg'
import globaloc from '../assets/work/globaloc.svg'
import educonnect from '../assets/work/educonnect.svg'
import wanderwise from '../assets/work/wanderwise.svg'
import connectcrm from '../assets/work/connectcrm.svg'


const Card = ({img, title, subTitle, link, text}) => {
  return (
    <div className='w-1/2 flex gap-8 flex-col text-greyAccent-800 border-r border-greyAccent-400 pb-20 ssm:w-full'>
        <div className='font-medium text-xl px-20 lgg:px-10 mdd:px-5 py-6 border border-greyAccent-400 lgg:text-base ssm:text-lg'>{title}</div>
        <div className='flex flex-col gap-6 px-20 lgg:px-10 mdd:px-5 w-full'>
          <div><img src={img} alt="" className='w-full object-cover'/></div>
          <div>
            <h2 className='font-medium text-lg'>{subTitle}</h2>
            <div className='flex justify-between items-center'>
              <div className='rounded bg-greyAccent-400 px-3 py-1 font-light'>{link}</div>
              <div><img src={direct} alt="" /></div>
            </div>
          </div>
          <div>{text}</div>
        </div>
      </div>
  )
}

const Work = () => {
  return (
    <div>
       <div className='ssm:h-[350px]'>
          <img src={work} alt="" className="h-full w-full object-cover brightness-75"/>
        </div>
        <div className="pt-20 pb-6"> 
          <div className="text-white flex flex-col gap-2 pb-14 px-20 lgg:px-8">
            <h1 className="font-semibold text-5xl">At SquareUp</h1>
            <p className="text-greyAccent-800 w-[65%] lgg:w-full">We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.</p>
            <div className="mt-14">
              <button className="rounded bg-greyAccent-400 px-3 py-1 font-light">Here are ten examples of our notable works:</button>
            </div>
          </div>

          <div className='flex flex-wrap'>
            <Card 
              img={boutique}
              title="E-Commerce Platform for Fashion Hub"
              subTitle="Chic Boutique"
              link="htttps:/www.chicboutique.com"
              text="We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction."
              />
            <Card 
              img={hungryBite}
              title="Mobile App for Food Delivery Service"
              subTitle="HungryBites"
              link="htttps:/www.hungrybites.com"
              text="HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."
              />
            <Card 
              img={eventmaster}
              title="Booking and Reservation System for Event Management"
              subTitle="EventMasters"
              link="htttps:/www.eventmasters.com"
              text="EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences."
              />
            <Card 
              img={protech}
              title="Custom Software for Workflow Automation"
              subTitle="ProTech Solutions"
              link="htttps:/www.protechsolutions.com"
              text="HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."
              />
            <Card 
              img={dreamhome}
              title="Web Portal for Real Estate Listings"
              subTitle="Dream Homes Realty"
              link="htttps:/www.dreamhomesrealty.com"
              text="Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily."
              />
            <Card 
              img={fitlife}
              title="Mobile App for Fitness Tracking"
              subTitle="FitLife Tracker"
              link="htttps:/www.fitlifetracker.com"
              text="FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles."
              />
            <Card 
              img={globaloc}
              title="Custom Software for Supply Chain Management"
              subTitle="Global Logistics Solutions"
              link="htttps:/www.globallogisticssolutions.com"
              text="Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management, automated order processing, and enhanced logistics tracking, resulting in improved efficiency and reduced costs."
              />
            <Card 
              img={educonnect}
              title="Educational Platform for Online Learning"
              subTitle="EduConnect"
              link="htttps:/www.educonnect.com"
              text="EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking, providing a seamless and engaging learning experience for students of all ages."
              />
            <Card 
              img={wanderwise}
              title="Mobile App for Travel Planning"
              subTitle="WanderWise"
              link="htttps:/www.wanderwise.com"
              text="WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries, destination guides, and integrated booking options, making it easier for travelers to explore new destinations."
              />
            <Card 
              img={connectcrm}
              title="Web Application for Customer Relationship Management"
              subTitle="ConnectCRM"
              link="htttps:/www.connectcrm.com"
              text="ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management, communication tracking, and data analytics, enabling businesses to nurture customer relationships and drive growth."
              />
          </div>
          <div>
            <img src={container} alt="" className="h-full w-full object-cover brightness-75"/>
          </div>
        </div>
    </div>
  )
}

export default Work;