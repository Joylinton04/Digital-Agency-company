import React from 'react'

const Form = () => {
  return (
    <div>
        <form className='flex justify-center'>
            <div className='border border-greyAccent-400 p-16 ssm:p-8 w-[800px] ssm:w-full flex flex-col gap-8'>
                <div className='flex gap-8 rounded-md ssm:flex-wrap'>
                <div className='border border-greyAccent-400 px-8 py-5 flex flex-col gap-4 grow rounded-md'>
                    <p className='text-white'>Full Name</p>
                    <input type="text" placeholder='Type here' className='border-b border-greyAccent-400 pb-2 bg-transparent outline-none text-greyAccent-800'/>
                </div>
                <div className='border border-greyAccent-400 px-8 py-5 flex flex-col gap-4 grow rounded-md'>
                    <p className='text-white'>Email</p>
                    <input type="text" placeholder='Type here' className='border-b border-greyAccent-400 pb-2 bg-transparent outline-none text-greyAccent-800'/>
                </div>
                </div>
                <div className='p-8 ssm:p-4 flex flex-col gap-8 border border-greyAccent-400 rounded-md'>
                    <p className='font-medium text-lg text-white'>Why are you contacting us?</p>
                    <div className='flex flex-wrap ssm:gap-3'>
                    <label className='flex gap-2 w-1/2 mb-4 relative cursor-pointer ssm:w-full'>
                        {/* left: 9px;
                            top: 5px;
                            width: 5px;
                            height: 10px;
                            border: solid white;
                            border-width: 0 3px 3px 0;
                            -webkit-transform: rotate(45deg); */}
                        <input 
                        type="checkbox" 
                        className='bg-[#1E1E1E] rounded w-6 h-6 border border-greyAccent-400' 
                        id='check1' 
                        />
                        <span className='bg-[#1E1E1E] border border-greyAccent-400 absolute left-0 top-0 w-[25px] h-[25px] checkmark'></span>
                        <label className='text-greyAccent-800' htmlFor='check1'>Web Design</label>
                    </label>
                    <label className='flex gap-2 w-1/2 mb-4 relative cursor-pointer ssm:w-full'>
                        <input 
                        type="checkbox" 
                        className='bg-[#1E1E1E] rounded w-6 h-6 border border-greyAccent-400' 
                        id='check2' 
                        />
                        <span className='bg-[#1E1E1E] border border-greyAccent-400 absolute left-0 top-0 w-[25px] h-[25px] checkmark'></span>
                        <label className='text-greyAccent-800' htmlFor='check2'>Collaboration</label>
                    </label>
                    <label className='flex gap-2 w-1/2 mb-4 relative cursor-pointer ssm:w-full'>
                        <input 
                        type="checkbox" 
                        className='bg-[#1E1E1E] rounded w-6 h-6 border border-greyAccent-400' 
                        id='check3' 
                        />
                        <span className='bg-[#1E1E1E] border border-greyAccent-400 absolute left-0 top-0 w-[25px] h-[25px] checkmark'></span>
                        <label className='text-greyAccent-800' htmlFor='check3'>Mobile App Design</label>
                    </label>
                    <label className='flex gap-2 w-1/2 mb-4 relative cursor-pointer ssm:w-full'>
                        <input 
                        type="checkbox" 
                        className='bg-[#1E1E1E] rounded w-6 h-6 border border-greyAccent-400' 
                        id='check4' 
                        />
                        <span className='bg-[#1E1E1E] border border-greyAccent-400 absolute left-0 top-0 w-[25px] h-[25px] checkmark'></span>
                        <label className='text-greyAccent-800' htmlFor='check4'>Others</label>
                    </label>
                    </div>
                </div> 
                <div className='p-8 flex flex-col gap-8 border border-greyAccent-400 rounded-md'>
                <div className='flex flex-col gap-2'>
                    <p className='text-white font-medium'>Your Budget</p>
                    <p className='text-greyAccent-800'>Slide to indicate your budget range</p>
                </div>
                <div>
                    <input 
                    type="range" 
                    max="10000" 
                    min="500" 
                    className=''/>
                </div>
                </div>
                <div className='p-8 flex flex-col gap-8 border border-greyAccent-400 rounded-md'>
                <div className=' flex flex-col gap-4 grow rounded-md'>
                    <h1 className='font-medium text-2xl text-white'>Your Message</h1>
                    <input type="text" placeholder='Type here' className='border-b border-greyAccent-400 pb-2 bg-transparent outline-none text-greyAccent-800'/>
                    </div>
                </div>
                <div className='grid place-content-center'>
                <button className='rounded bg-greenAccent-500 px-12 py-4 text-lg font-medium ssm:px-8 ssm:py-2' type='submit'>Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Form;