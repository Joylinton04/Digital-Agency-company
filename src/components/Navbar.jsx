import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from "@mui/icons-material/Close"
import cub from '../assets/cub.svg'
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false)

  return (
    <div className='h-24 px-20 mdd:px-14 ssm:px-6 flex items-center bg-[262626] border-b border-greyAccent-400'>
        <div className='flex justify-between items-center w-full relative'>
            <div className='flex items-center text-white gap-1 mdd:gap-6'>
                <div className='w-10 h-10 bg-greenAccent-500 p-1 rounded'><img src={cub} alt="" className='object-cover w-full h-full'/></div>
                <h1 className='font-semibold'>SquareUp</h1>
            </div>
            <div className='text-greyAccent-900 flex items-center gap-6 mdd:hidden'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/s">Work</NavLink>
                <NavLink to="/d">Process</NavLink>
                <NavLink to="/f">About</NavLink>
                <NavLink to="/g">Careers</NavLink>
            </div>
            <div className='flex gap-1'>
                <div className='px-5 py-3 lgg:px-3 lgg:py-2 bg-greenAccent-500 rounded'>Contact Us</div>
                <div className='text-greyAccent-900'>
                <div className='z-30 relative hidden ssm:block' onClick={() => setOpen(prev => !prev)}>
                    {open
                    ? <CloseIcon fontSize='large' sx={open ? {color: "white"} : {color: ""}}/>
                    : <MenuIcon fontSize='large' sx={open ? {color: "white"} : {color: ""}}/>
                    }
                </div>
                    { open &&
                        <div className='fixed z-20 top-0 right-0 bg-[#131313cc] h-full w-full flex justify-end'>
                            <ul className='pt-28 bg-black w-40 text-end px-6 flex flex-col gap-2 text-lg'>
                                <li className='border-b border-greyAccent-600 hover:scale-110 duration-200'>Home</li>
                                <li className='border-b border-greyAccent-600 hover:scale-110 duration-200'>Services</li>
                                <li className='border-b border-greyAccent-600 hover:scale-110 duration-200'>Work</li>
                                <li className='border-b border-greyAccent-600 hover:scale-110 duration-200'>Process</li>
                                <li className='border-b border-greyAccent-600 hover:scale-110 duration-200'>About</li>
                                <li className='border-b border-greyAccent-600 hover:scale-110 duration-200'>Careers</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;