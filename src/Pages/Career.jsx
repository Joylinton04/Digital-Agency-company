import career from '../assets/career/career.svg'
import brush from '../assets/career/brush.svg'
import people from '../assets/career/people.svg'
import frontend from '../assets/servicespage/frontend.svg'
import cms from "../assets/servicespage/cms.svg"
import bag from "../assets/servicespage/bag.svg"
import intuitive from '../assets/servicespage/intuitive.svg'
import backend from '../assets/servicespage/backend.svg'
import research from "../assets/servicespage/research.svg"
import database from "../assets/servicespage/database.svg"
import shield from "../assets/shield.svg"
import graph from "../assets/servicespage/graph.svg"
import tools from "../assets/servicespage/tools.svg"
import squarebox from '../assets/about/squarebox.svg'

const CareerItem = ({text, title}) => {
  return (
    <div className="px-10 lgg:px-8 mdd:px-5 py-20 lgg:py-20 mdd:py-16 border border-greyAccent-400 w-1/2 ssm:w-full flex items-center">
      <div className="text-greyAccent-800 flex flex-col justify-center mdd:gap-6 mdd:justify-between mdd:h-full">
        <div className="flex gap-3 items-center font-medium text-3xl mdd:text-2xl mdd:pb-4 pb-10 text-greenAccent-400 border-b border-greyAccent-400">{title}</div>
        <div className="mdd:text-sm">{text}</div>
      </div>
    </div>
  )
}


const Career = () => {
  return (
    <div>
      <div className='mdd:h-[350px]'>
        <img src={career} alt="" className="h-full w-full object-cover brightness-75"/>
      </div>

      <div className="pt-20 pb-6"> 
          <div className="text-white flex flex-col gap-2 pb-14 px-20 lgg:px-8">
            <h1 className="font-semibold text-5xl ssm:text-3xl">Welcome to SquareUp, where talent meets opportunity!</h1>
            <p className="text-greyAccent-800 w-[65%] lgg:w-full">At SquareUp, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us.</p>
            <div className="mt-14">
              <button className="rounded bg-greyAccent-400 px-3 py-1 font-light">Why Work at SquareUp?</button>
            </div>
          </div>

          <div className='flex flex-wrap'>
            <CareerItem
              text="At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference."
              title="Innovative and Impactful Projects"
            />
            <CareerItem
              text="At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference."
              title="Supportive Environment"
            />
            <CareerItem
              title="Continuous Learning and Growth"
              text="We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. At SquareUp, you'll have the chance to expand your skill set and stay up-to-date with the latest trends and technologies."
            />
            <CareerItem
              title="Challenging and Rewarding Work"
              text="Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life."
            />
          </div>
          <div className='pt-20 px-10 pb-10 flex flex-col gap-4'>
              <h1 className='text-white font-semibold text-4xl'>Current Openings</h1>
              <p className='text-greyAccent-800 w-[60%] ssm:w-full'>We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions.</p>
          </div>

          <div className='p-10 flex items-center border-t border-greyAccent-400'>
            <div className='text-greyAccent-800 font-medium text-xl'>Design Job Openings</div>
          </div>

          <div className='flex mdd:flex-wrap'>
                <div className='p-14 lgg:p-8 grow flex-col border-r border-t border-greyAccent-400'>
                  <div className='flex flex-col gap-12 justify-between'>
                    <div className='p-6 border border-[#333] rounded-md h-20 w-20'><img src={intuitive} alt="" /></div>
                    <div className='flex flex-col gap-2'>
                      <h1 className='font-semibold text-xl text-white'>UI Designer</h1>
                      <p className=' text-greyAccent-800'>Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression.</p>
                    </div>
                  <div className='w-full'>
                    <button className='w-full rounded text-white px-4 py-5 bg-greyAccent-400 text-center grid place-content-center'>Apply Now</button>
                  </div>
                  </div>
                </div>
                <div className='p-14 lgg:p-8 grow flex-col border-t border-r border-greyAccent-400'>
                  <div className='flex flex-col gap-12 justify-between'>
                    <div className='p-6 border border-[#333] rounded-md h-20 w-20'><img src={research} alt="" /></div>
                    <div className='flex flex-col gap-2'>
                      <h1 className='font-semibold text-xl text-white'>UX Designer</h1>
                      <p className=' text-greyAccent-800'>Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.</p>
                    </div>
                  <div className='w-full'>
                    <button className='w-full rounded text-white px-4 py-5 bg-greyAccent-400 text-center grid place-content-center'>Apply Now</button>
                  </div>
                  </div>
                </div>
                <div className='p-14 lgg:p-8 grow flex-col border-t border-greyAccent-400'>
                  <div className='flex flex-col gap-12 justify-between'>
                    <div className='p-6 border border-[#333] rounded-md h-20 w-20'><img src={brush} alt="" /></div>
                    <div className='flex flex-col gap-2'>
                      <h1 className='font-semibold text-xl text-white'>Design Head</h1>
                      <p className=' text-greyAccent-800'>Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs.</p>
                    </div>
                    <div className='w-full'>
                      <button className='w-full rounded text-white px-4 py-5 bg-greyAccent-400 text-center grid   place-content-center'>Apply Now</button>
                    </div>
                  </div>
                </div>
            </div>
            
          <div className='p-10 flex items-center border-t border-greyAccent-400'>
            <div className='text-greyAccent-800 font-medium text-xl'>Development Job Openings</div>
          </div>

          <div className='flex mdd:flex-wrap'>
                <div className='p-14 lgg:p-8 grow flex-col border-r border-t border-greyAccent-400'>
                  <div className='flex flex-col gap-12 justify-between'>
                    <div className='p-6 border border-[#333] rounded-md h-20 w-20'><img src={frontend} alt="" /></div>
                    <div className='flex flex-col gap-2'>
                      <h1 className='font-semibold text-xl text-white'>Front - End Developer</h1>
                      <p className=' text-greyAccent-800'>Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences.</p>
                    </div>
                  <div className='w-full'>
                    <button className='w-full rounded text-white px-4 py-5 bg-greyAccent-400 text-center grid place-content-center'>Apply Now</button>
                  </div>
                  </div>
                </div>
                <div className='p-14 lgg:p-8 grow flex-col border-t border-r border-greyAccent-400'>
                  <div className='flex flex-col gap-12 justify-between'>
                    <div className='p-6 border border-[#333] rounded-md h-20 w-20'><img src={backend} alt="" /></div>
                    <div className='flex flex-col gap-2'>
                      <h1 className='font-semibold text-xl text-white'>Back - End  Developer</h1>
                      <p className=' text-greyAccent-800'>Be part of our team as a Backend Developer and contribute to building robust and scalable web applications. Develop server-side logic, integrate databases, and optimize system performance. Collaborate with front-end developers to ensure smooth communication between the server and the user interface.</p>
                    </div>
                  <div className='w-full'>
                    <button className='w-full rounded text-white px-4 py-5 bg-greyAccent-400 text-center grid place-content-center'>Apply Now</button>
                  </div>
                  </div>
                </div>
                <div className='p-14 lgg:p-8 grow flex-col border-t border-greyAccent-400'>
                  <div className='flex flex-col gap-12 justify-between'>
                    <div className='p-6 border border-[#333] rounded-md h-20 w-20'><img src={cms} alt="" /></div>
                    <div className='flex flex-col gap-2'>
                      <h1 className='font-semibold text-xl text-white'>Full Stack Developer</h1>
                      <p className=' text-greyAccent-800'>Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. Collaborate with designers, developers, and stakeholders to deliver comprehensive and user-friendly solutions.</p>
                    </div>
                    <div className='w-full'>
                      <button className='w-full rounded text-white px-4 py-5 bg-greyAccent-400 text-center grid   place-content-center'>Apply Now</button>
                    </div>
                  </div>
                </div>
            </div>

          <div className='p-10 flex items-center border-t border-greyAccent-400'>
            <div className='text-greyAccent-800 font-medium text-xl'>Management Job Openings</div>
          </div>

          <div className='flex mdd:flex-wrap'>
                <div className='p-14 lgg:p-8 grow flex-col border-r border-t border-greyAccent-400'>
                  <div className='flex flex-col gap-12 justify-between'>
                    <div className='p-6 border border-[#333] rounded-md h-20 w-20'><img src={bag} alt="" /></div>
                    <div className='flex flex-col gap-2'>
                      <h1 className='font-semibold text-xl text-white'>BA Manager</h1>
                      <p className=' text-greyAccent-800'>Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, facilitate communication between stakeholders, and ensure project alignment with business objectives. Provide leadership and mentorship to a team of talented business analysts.</p>
                    </div>
                  <div className='w-full'>
                    <button className='w-full rounded text-white px-4 py-5 bg-greyAccent-400 text-center grid place-content-center'>Apply Now</button>
                  </div>
                  </div>
                </div>
                <div className='p-14 lgg:p-8 grow flex-col border-t border-r border-greyAccent-400'>
                  <div className='flex flex-col gap-12 justify-between'>
                    <div className='p-6 border border-[#333] rounded-md h-20 w-20'><img src={database} alt="" /></div>
                    <div className='flex flex-col gap-2'>
                      <h1 className='font-semibold text-xl text-white'>Project Manager</h1>
                      <p className=' text-greyAccent-800'>Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. Utilize your leadership and organizational skills to drive project success.</p>
                    </div>
                  <div className='w-full'>
                    <button className='w-full rounded text-white px-4 py-5 bg-greyAccent-400 text-center grid place-content-center'>Apply Now</button>
                  </div>
                  </div>
                </div>
                <div className='p-14 lgg:p-8 grow flex-col border-t border-greyAccent-400'>
                  <div className='flex flex-col gap-12 justify-between'>
                    <div className='p-6 border border-[#333] rounded-md h-20 w-20'><img src={people} alt="" /></div>
                    <div className='flex flex-col gap-2'>
                      <h1 className='font-semibold text-xl text-white'>HR Manager</h1>
                      <p className=' text-greyAccent-800'>Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture.</p>
                    </div>
                    <div className='w-full'>
                      <button className='w-full rounded text-white px-4 py-5 bg-greyAccent-400 text-center grid   place-content-center'>Apply Now</button>
                    </div>
                  </div>
                </div>
            </div>

          <div className='p-10 flex items-center border-t border-greyAccent-400'>
            <div className='text-greyAccent-800 font-medium text-xl'>QA Job Openings</div>
          </div>

          <div className='flex mdd:flex-wrap'>
                <div className='p-14 lgg:p-8 grow flex-col border-r border-t border-greyAccent-400'>
                  <div className='flex flex-col gap-12 justify-between'>
                    <div className='p-6 border border-[#333] rounded-md h-20 w-20'><img src={tools} alt="" /></div>
                    <div className='flex flex-col gap-2'>
                      <h1 className='font-semibold text-xl text-white'>QA Tester</h1>
                      <p className=' text-greyAccent-800'>Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience.</p>
                    </div>
                  <div className='w-full'>
                    <button className='w-full rounded text-white px-4 py-5 bg-greyAccent-400 text-center grid place-content-center'>Apply Now</button>
                  </div>
                  </div>
                </div>
                <div className='p-14 lgg:p-8 grow flex-col border-t border-r border-greyAccent-400'>
                  <div className='flex flex-col gap-12 justify-between'>
                    <div className='p-6 border border-[#333] rounded-md h-20 w-20'><img src={graph} alt="" /></div>
                    <div className='flex flex-col gap-2'>
                      <h1 className='font-semibold text-xl text-white'>SQL Tester</h1>
                      <p className=' text-greyAccent-800'>Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. Collaborate with developers and QA testers to ensure the accuracy and reliability of our data.</p>
                    </div>
                  <div className='w-full'>
                    <button className='w-full rounded text-white px-4 py-5 bg-greyAccent-400 text-center grid place-content-center'>Apply Now</button>
                  </div>
                  </div>
                </div>
                <div className='p-14 lgg:p-8 grow flex-col border-t border-greyAccent-400'>
                  <div className='flex flex-col gap-12 justify-between'>
                    <div className='p-6 border border-[#333] rounded-md h-20 w-20'><img src={shield} alt="" /></div>
                    <div className='flex flex-col gap-2'>
                      <h1 className='font-semibold text-xl text-white'>Manual Tester</h1>
                      <p className=' text-greyAccent-800'>Be part of our team as a Manual Tester and perform comprehensive manual testing to ensure the quality and functionality of our software applications. Develop test cases, execute test scripts, and document test results. Collaborate with developers and QA testers to troubleshoot issues and enhance software performance.</p>
                    </div>
                    <div className='w-full'>
                      <button className='w-full rounded text-white px-4 py-5 bg-greyAccent-400 text-center grid   place-content-center'>Apply Now</button>
                    </div>
                  </div>
                </div>
            </div>

          <div className='p-20 lgg:px-8 border-t border-greyAccent-400'>
              <div className='flex flex-col ssm:items-center gap-14 text-greyAccent-800'>
                  <div className='flex items-center gap-6 ssm:flex-wrap ssm:justify-center'>
                    <img src={squarebox} alt=""/>
                    <div className='flex flex-col gap-3'>
                      <div className='font-medium text-3xl ssm:text-2xl ssm:text-center'>Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</div>
                      <div className='ssm:text-center'>Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</div>
                    </div>
                  </div>
                  <div className='bg-page flex items-center px-10 py-6 border border-greyAccent-400 rounded-md lgg:px-6'>
                      <div className='flex gap-2 ssm:gap-4 justify-between items-center w-full lgg:flex-wrap ssm:justify-center'>
                        <p className='lgg:grow ssm:text-center text-lg'>Welcome to SquareUp</p>
                        <h2 className='bg-greyAccent-400 px-6 py-3 mdd:px-2 rounded lgg:grow ssm:text-center text-white'>Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</h2>
                        <div className='text-black rounded-md font-medium text-lg px-4 py-2 bg-greenAccent-500 ssm:grow ssm:text-center'>Start Project</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Career;