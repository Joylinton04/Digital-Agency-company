import services from "../assets/services.svg"
import research from "../assets/servicespage/research.svg"
import message from "../assets/servicespage/message.svg"
import test from "../assets/servicespage/test.svg"
import design from "../assets/servicespage/design.svg"

const Services = () => {
  return (
    <div>
        <div className="h-[340px]">
          <img src={services} alt="" className="h-full w-full object-cover brightness-75"/>
        </div>
        <div className="pt-36 pb-6"> 
          <div className="text-white flex flex-col gap-2 border-b border-greyAccent-400 pb-14 px-20">
            <h1 className="font-semibold text-5xl">Design</h1>
            <p className="text-greyAccent-800 w-[65%]">At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. </p>

            <div className="mt-14">
              <button className="rounded bg-greyAccent-400 px-3 py-1 font-light">Our design services include:</button>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-medium text-2xl px-20 text-greyAccent-800">User Experience (UX) Design</h2>
            <div className="flex px-12 mt-12">
              <div className="flex flex-col p-8 gap-4 border-r border-greyAccent-400">
                <div className='p-6 border border-[#333] rounded-md h-20 w-20'>
                  <img src={research} alt="" />
                </div>
                <p className="text-greyAccent-900 font-medium">User Research and Persona Development</p>
              </div>
              <div className="flex flex-col p-8 gap-4 border-r border-greyAccent-400">
                <div className='p-6 border border-[#333] rounded-md h-20 w-20'>
                  <img src={message} alt="" />
                </div>
                <p className="text-greyAccent-900 font-medium">Information Architecture and Wireframing</p>
              </div>
              <div className="flex flex-col p-8 gap-4 border-r border-greyAccent-400 ">
                <div className='p-6 border border-[#333] rounded-md h-20 w-20'>
                  <img src={test} alt="" />
                </div>
                <p className="text-greyAccent-900 font-medium">Interactive Prototyping and User Testing</p>
              </div>
              <div className="flex flex-col p-8 gap-4">
                <div className='p-6 border border-[#333] rounded-md h-20 w-20'>
                  <img src={design} alt="" />
                </div>
                <p className="text-greyAccent-900 font-medium">UI Design and Visual Branding</p>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-medium text-2xl px-20 text-greyAccent-800">User Interface (UI) Design</h2>
            <div className="flex px-12 mt-12">
              <div className="flex flex-col p-8 gap-4 border-r border-greyAccent-400">
                <div className='p-6 border border-[#333] rounded-md h-20 w-20'>
                  <img src={intuitive} alt="" />
                </div>
                <p className="text-greyAccent-900 font-medium">Intuitive and Visually Appealing Interface Design</p>
              </div>
              <div className="flex flex-col p-8 gap-4 border-r border-greyAccent-400">
                <div className='p-6 border border-[#333] rounded-md h-20 w-20'>
                  <img src={illustration} alt="" />
                </div>
                <p className="text-greyAccent-900 font-medium">Custom Iconography and Illustration</p>
              </div>
              <div className="flex flex-col p-8 gap-4 border-r border-greyAccent-400 ">
                <div className='p-6 border border-[#333] rounded-md h-20 w-20'>
                  <img src={typography} alt="" />
                </div>
                <p className="text-greyAccent-900 font-medium">Typography and Color Palette Selection</p>
              </div>
              <div className="flex flex-col p-8 gap-4">
                <div className='p-6 border border-[#333] rounded-md h-20 w-20'>
                  <img src={responsive} alt="" />
                </div>
                <p className="text-greyAccent-900 font-medium">Responsive Design for Various Devices</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Services;