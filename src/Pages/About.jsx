import about from '../assets/about/about.svg'
import box from '../assets/about/box.svg'
import squarebox from '../assets/about/squarebox.svg'
import ProcessCard from '../components/ProcessCard';

const About = () => {
  return (
    <div>
      <div className='mdd:h-[350px]'>
        <img src={about} alt="" className="h-full w-full object-cover brightness-75"/>
      </div>
      <div className="flex px-36 py-24 lgg:px-24 mdd:px-8">
        <div className='flex items-center justify-between gap-24 ssm:flex-wrap ssm:justify-center'>
          <div className='w-1/2 flex flex-col gap-4 ssm:w-full'>
            <h1 className="font-semibold text-5xl text-white">About SquareUp</h1>
            <p className="text-greyAccent-800">SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
          </div>
          <div className='w-1/2 ssm:w-full'>
            <img src={box} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className='px-20 py-24 border-t border-greyAccent-400 mdd:py-12'>
          <div className=' font-semibold text-6xl text-white'>Our Story</div>
        </div>
        <div className='flex flex-wrap'>
          <ProcessCard
            number="01"
            title="Design"
            text="Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression."
            />
          <ProcessCard
            number="02"
            title="Engineering"
            text="Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible."
            />
          <ProcessCard
            number="03"
            title="Project Management"
            text="In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget."
            />
          <ProcessCard
            number="04"
            title="Collaboration"
            text="At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations."
            />
          <ProcessCard
            number="05"
            title="Client-Centric Approach"
            text="SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey."
            />
          <ProcessCard
            number="06"
            title="Driving Success"
            text="With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world."
            />
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

export default About;