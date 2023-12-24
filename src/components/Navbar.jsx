import { NavLink,Link } from 'react-router-dom';
import CloseIcon from "@mui/icons-material/Close"
import cub from '../assets/cub.svg'
import menu from '../assets/menu.svg'
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false)

  return (
    <div className='h-24 px-20 lgg:px-14 mdd:px-12 ssm:px-6 flex items-center bg-[262626] border-b border-greyAccent-400'>
        <div className='flex justify-between items-center w-full relative'>
            <div className='flex items-center text-white gap-1 mdd:gap-6'>
                <div className='w-10 h-10 bg-greenAccent-500 p-1 rounded'><img src={cub} alt="" className='object-cover w-full h-full'/></div>
                <h1 className='font-semibold'>SquareUp</h1>
            </div>
            <div className='text-greyAccent-900 flex items-center gap-6 mdd:hidden'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/work">Work</NavLink>
                <NavLink to="/process">Process</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Careers</NavLink>
            </div>
            <div className='flex gap-1'>
                <Link to="/contact" className='px-5 py-3 lgg:px-3 lgg:py-2 bg-greenAccent-500 rounded mdd:hidden'>Contact Us</Link>
                <div className='text-greyAccent-900'>
                <div className='z-30 relative hidden mdd:block' onClick={() => setOpen(prev => !prev)}>
                    {open
                    ? <CloseIcon fontSize='large' sx={open ? {color: "#D8FF99"} : {color: ""}}/>
                    : <img src={menu} alt=''/>
                    }
                </div>
                    { open &&
                        <div className='fixed z-20 top-0 right-0 bg-[#131313cc] h-full w-full flex justify-end'>
                            <div className='pt-28 bg-black w-40 text-end px-6 flex flex-col gap-2 text-lg'>
                                <Link to="/" className='border-b border-greyAccent-600 hover:scale-110 duration-200'>Home</Link>
                                <Link to="/services" className='border-b border-greyAccent-600 hover:scale-110 duration-200'>Services</Link>
                                <Link to="/work" className='border-b border-greyAccent-600 hover:scale-110 duration-200'>Work</Link>
                                <Link to="/process" className='border-b border-greyAccent-600 hover:scale-110 duration-200'>Process</Link>
                                <Link to="/about" className='border-b border-greyAccent-600 hover:scale-110 duration-200'>About</Link>
                                <Link to="/career" className='border-b border-greyAccent-600 hover:scale-110 duration-200'>Careers</Link>
                                <Link to="/contact" className='border-b border-greyAccent-600 hover:scale-110 duration-200'>Contact</Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;