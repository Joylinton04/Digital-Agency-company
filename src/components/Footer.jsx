import cub from "../assets/cub.svg"
import facebook from "../assets/facebook.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/twitter.svg"
import message from "../assets/message.svg"
import location from "../assets/location.svg"
import phone from "../assets/phone.svg"
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t border-greyAccent-400 px-36 py-14 lgg:px-24 mdd:px-16 lgg:py-8 ssm:px-4">
        <div className='flex items-center flex-col'>
            <div className='flex justify-between items-center lgg:flex-wrap lgg:gap-6 w-full border-b border-greyAccent-400 pb-6'>
                <div className='flex items-center text-white gap-1'>
                    <div className='w-10 h-10 bg-greenAccent-500 p-1 rounded'><img src={cub} alt="" className='object-cover w-full h-full'/></div>
                    <h1 className='font-semibold'>SquareUp</h1>
                </div>
                <div className='text-greyAccent-900 flex items-center gap-6 ssm:hidden'>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/a">Services</NavLink>
                    <NavLink to="/s">Work</NavLink>
                    <NavLink to="/d">Process</NavLink>
                    <NavLink to="/f">About</NavLink>
                    <NavLink to="/g">Careers</NavLink>
                </div>
                <div className="flex gap-3 px-3 py-2 rounded-md bg-[#171717] items-center lgg:grow lgg:justify-evenly">
                    <p className="text-greyAccent-800">Stay Connected</p>
                    <img src={facebook} alt="" className='h-20 w-20 object-cover border border-[#333] p-6 rounded-md'/>
                    <img src={linkedin} alt="" className='h-20 w-20 object-cover border border-[#333] p-6 rounded-md'/>
                    <img src={twitter} alt="" className='h-20 w-20 object-cover border border-[#333] p-6 rounded-md'/>
                </div>
            </div>
            <div className="flex justify-between text-greyAccent-800 w-full pt-6 lgg:flex-wrap lgg:gap-6">
                <div className="flex gap-6 w-1/2 lgg:w-full lgg:justify-between ssm:flex-wrap ssm:w-full">
                    <div className="flex border-b border-greyAccent-400">
                        <img src={message} alt="" className="w-6 h-6 object-contain"/>
                        <p>hello@squareup.com</p>
                    </div>
                    <div className="flex border-b border-greyAccent-400">
                        <img src={phone} alt="" className="w-6 h-6 object-contain"/>
                        <p>+91 91813 23 2309</p>
                    </div>
                    <div className="flex border-b border-greyAccent-400">
                        <img src={location} alt="" className="w-6 h-6 object-contain"/>
                        <p>Somewhere in the World</p>
                    </div>
                </div>
                <div className="text-lg lgg:grow">&copy; {new Date().getFullYear} SquareUp. All rights reserved.</div>
            </div>
        </div>
    </div>
  )
}

export default Footer;