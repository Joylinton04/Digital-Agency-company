import frame from '../assets/frame.svg'
import services from '../assets/services.svg'
import zapier from '../assets/zapier.svg'
import zoom from '../assets/zoom.svg'
import spotify from '../assets/spotify.svg'
import slack from '../assets/slack.svg'
import amazon from '../assets/amazon.svg'
import adobe from '../assets/adobe.svg'
import whysquareup from '../assets/whysquareup.svg'
import ink from '../assets/ink.svg'
import badge from '../assets/badge.svg'
import testimonial from '../assets/testimonial.svg'
import communication from '../assets/communication.svg'
import crown from '../assets/crown.svg'
import shield from '../assets/shield.svg'
import luggage from '../assets/luggage.svg'
import puzzle from '../assets/puzzle.svg'
import profile1 from '../assets/profile1.svg'
import faq from '../assets/faq.svg'
import thankyou from '../assets/thankyou.svg'
//import check from '../assets/check.svg'
import { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Footer from '../components/Footer'

const Home = () => {

  const [isExpanded, setIsExpanded] = useState(null);
  const [range, setRange] = useState(1000)

  const handleChange = (panel) => () => {
    setIsExpanded(prev => prev === panel ? null : panel);
    console.log('expanded')
  };

  const handleCheck = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked
    console.log(isChecked)
  }


  return (
    <div className='min-h-screen relative'>
        <div className='frame relative'>

          <div className='flex justify-center items-center pt-32 lgg:pt-20'>
          <div className='flex flex-col gap-12 lgg:gap-8 items-center'>
              <h1 className='font-semibold text-6xl mdd:text-5xl ssm:text-3xl text-white text-center'>A Digital Product Studio <br/>that will Work</h1>
              <div className='bg-greyAccent-550 px-8 ssm:px-2 mdd:px-4 py-5 text-[#98989A] border border-greyAccent-600 rounded-lg'>
                  <p className='ssm:text-sm ssm:flex ssm:flex-wrap ssm:justify-center ssm:gap-1 ssm:items-center'>For <span className='px-3 py-2 bg-greyAccent-600 rounded-md text-slate-300 mx-1'>Startups</span>, <span className='px-3 py-2 bg-greyAccent-600 rounded-md text-slate-300 mx-1'>Enterprise Leaders</span>, <span className='px-3 py-2 bg-greyAccent-600 rounded-md text-slate-300 mx-1'>Media & Publishers</span> and <span className='px-3 py-2 bg-greyAccent-600 rounded-md text-slate-300 mx-1'>Social Good</span></p>
              </div>
              <div className='mt-6 flex gap-6'>
                <button className='px-5 py-3 bg-[#242424] rounded text-white'>Our Works</button>
                <button className='px-5 py-3 bg-greenAccent-500 rounded'>Contact Us</button>
              </div>
            </div>
          </div>

          <div className='absolute -z-10 bottom-0 left-[50%] -translate-x-1/2 w-full lgg:h-[50vh]'><img src={frame} alt="" className='w-full h-full object-cover brightness-75 object-center'/></div>
          <div className='absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-white rounded-2xl border border-greyAccent-600 px-4 py-2 bg-[#1a1a1a] text-sm'>
          Trusted By 250+ Companies
          </div>
        </div>
       <div>
         <div className="flex justify-between items-center py-8 px-20 lgg:px-0 mdd:flex-wrap mdd:gap-4 mdd:justify-start">
              <img src={zapier} alt="" className="px-8 py-4 object-cover"/>
              <img src={spotify} alt="" className="px-8 py-4 object-cover"/>
              <img src={zoom} alt="" className="px-8 py-4 object-cover"/>
              <img src={slack} alt="" className="px-8 py-4 object-cover"/>
              <img src={amazon} alt="" className="px-8 py-4 object-cover"/>
              <img src={adobe} alt="" className="px-8 py-4 object-cover"/>
          </div>

          <div>
            <div className="h-[340px]">
              <img src={services} alt="" className="h-full w-full object-cover brightness-75"/>
            </div>

          {/* services */}

            <div className='flex mdd:flex-wrap'>
                <div className='p-14 lgg:p-8 grow flex-col border-r border-greyAccent-400'>
                  <div className='flex flex-col gap-12 justify-between'>
                    <div className='p-6 border border-[#333] rounded-md h-20 w-20'><img src={ink} alt="" /></div>
                    <div className='flex flex-col gap-2'>
                      <h1 className='font-semibold text-3xl text-white'>Design</h1>
                      <p className=' text-greyAccent-300'>At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>
                    </div>
                  <div className='w-full'>
                    <button className='w-full rounded text-white px-4 py-5 bg-greyAccent-400 text-center grid place-content-center'>Learn More</button>
                  </div>
                  </div>
                </div>
                <div className='p-14 lgg:p-8 grow flex-col border border-greyAccent-400'>
                  <div className='flex flex-col gap-12 justify-between'>
                    <div className='p-6 border border-[#333] rounded-md h-20 w-20'><img src={puzzle} alt="" /></div>
                    <div className='flex flex-col gap-2'>
                      <h1 className='font-semibold text-3xl text-white'>Engineering</h1>
                      <p className=' text-greyAccent-300'>Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.</p>
                    </div>
                  <div className='w-full'>
                    <button className='w-full rounded text-white px-4 py-5 bg-greyAccent-400 text-center grid place-content-center'>Learn More</button>
                  </div>
                  </div>
                </div>
                <div className='p-14 lgg:p-8 grow flex-col'>
                  <div className='flex flex-col gap-12 justify-between'>
                    <div className='p-6 border border-[#333] rounded-md h-20 w-20'><img src={luggage} alt="" /></div>
                    <div className='flex flex-col gap-2'>
                      <h1 className='font-semibold text-3xl text-white'>Project Management</h1>
                      <p className=' text-greyAccent-300'>Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.</p>
                    </div>
                    <div className='w-full'>
                      <button className='w-full rounded text-white px-4 py-5 bg-greyAccent-400 text-center grid   place-content-center'>Learn More</button>
                    </div>
                  </div>
                </div>
            </div>

            {/* why squareUp  */}

            <div>
              <div className="h-[340px]">
                <img src={whysquareup} alt="" className="h-full w-full object-cover brightness-75"/>
              </div>
              <div className='flex flex-col px-20 lgg:px-0'>
                <div className='flex justify-between border-b border-greyAccent-400 ssm:flex-wrap'>
                  <div className='p-14 lgg:p-8 flex flex-col gap-4 w-1/2 ssm:w-full border-r border-greyAccent-400 ssm:grow'>
                    <div className='flex items-center gap-2'>
                      <img src={badge} alt="" className='h-20 w-20 object-cover border border-[#333] p-6 rounded-md'/>
                      <h3 className='text-white font-medium text-2xl'>Expertise</h3>
                    </div>
                    <div className='w-[70%] lgg:w-full'>
                      <p className='text-greyAccent-300'>Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.</p>
                    </div>
                  </div>
                  <div className='p-14 lgg:p-8 flex flex-col gap-4 w-1/2 ssm:w-full'>
                    <div className='flex items-center gap-2'>
                      <img src={communication} alt="" className='h-20 w-20 object-cover border border-[#333] p-6 rounded-md'/>
                      <h3 className='text-white font-medium text-2xl'>Client-Centric Approach</h3>
                    </div>
                    <div className='w-[70%] lgg:w-full'>
                      <p className='text-greyAccent-300'>We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.</p>
                    </div>
                  </div>
                </div>
                <div className='flex justify-between border-greyAccent-400 ssm:flex-wrap'>
                  <div className='p-14 lgg:p-8 flex flex-col gap-4 w-1/2 ssm:w-full border-r border-greyAccent-400 ssm:grow'>
                    <div className='flex items-center gap-2'>
                      <img src={shield} alt="" className='h-20 w-20 object-cover border border-[#333] p-6 rounded-md'/>
                      <h3 className='text-white font-medium text-2xl'>Results-Driven Solutions</h3>
                    </div>
                    <div className='w-[70%] lgg:w-full'>
                      <p className='text-greyAccent-300'>Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.</p>
                    </div>
                  </div>
                  <div className='p-14 lgg:p-8 flex flex-col gap-4 w-1/2 ssm:w-full'>
                    <div className='flex items-center gap-2'>
                      <img src={crown} alt="" className='h-20 w-20 object-cover border border-[#333] p-6 rounded-md'/>
                      <h3 className='text-white font-medium text-2xl'>Collaborative Partnership</h3>
                    </div>
                    <div className='w-[70%] lgg:w-full'>
                      <p className='text-greyAccent-300'>We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Testimonial */}

            <div>
              <div className="h-[340px]">
                <img src={testimonial} alt="" className="h-full w-full object-cover brightness-75"/>
              </div>
              <div className='flex flex-col px-20 lgg:px-0'>
                {/* section-1 */}
                <div className='flex justify-between border-b border-greyAccent-400 ssm:flex-wrap'>
                  <div className='border-r border-greyAccent-400 flex flex-col gap-8 w-1/2 px-16 lgg:px-8 lgg:py-12 py-20 lgg:w-full lgg:justify-between lgg:flex-wrap'>
                    <h1 className=' text-greenAccent-400 font-medium text-2xl'>SquareUp has been Instrumental in Transforming our Online Presence. </h1>
                      <p className=' text-greyAccent-300 font-light w-[100%]'>Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.</p>
                        <div className='flex mdd:flex-wrap gap-6 justify-between items-center border border-greyAccent-400 p-4'>
                          <div className='flex gap-3'>
                            <div className='w-12 h-12'><img src={profile1} alt="" className='h-full w-full object-cover'/></div>
                            <div>
                              <h1 className='text-white'>John Smith</h1>
                              <p className='text-greyAccent-300 font-light'>CEO of Chic Boutique</p>
                            </div>
                          </div>
                          <div className='rounded-md bg-greyAccent-400 text-white px-4 py-3'>
                            Open Website
                          </div>
                        </div>
                  </div>
                  <div className='flex flex-col gap-8 w-1/2 px-16 lgg:px-8 lgg:py-12 py-20 lgg:w-full lgg:justify-between lgg:flex-wrap'>
                      <h1 className=' text-greenAccent-400 font-medium text-2xl'>Working with SquareUp was a breeze.</h1>
                      <p className=' text-greyAccent-300 font-light w-[100%]'>They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.</p>
                      <div className='flex mdd:flex-wrap gap-6 justify-between items-center border border-greyAccent-400 p-4'>
                        <div className='flex gap-3'>
                          <div className='w-12 h-12'><img src={profile1} alt="" className='h-full w-full object-cover'/></div>
                          <div>
                            <h1 className='text-white'>John Smith</h1>
                            <p className='text-greyAccent-300 font-light'>CEO of Chic Boutique</p>
                          </div>
                        </div>
                        <div className='rounded-md bg-greyAccent-400 text-white px-4 py-3'>
                          Open Website
                        </div>
                      </div>
                  </div>
                  
                </div>
                {/* section-2 */}

                <div className='flex justify-between ssm:flex-wrap'>
                    <div className='flex flex-col border-r border-greyAccent-400 gap-8 w-1/2 px-16 lgg:px-8 lgg:py-12 py-20 lgg:w-full lgg:justify-between lgg:flex-wrap'>
                      <h1 className=' text-greenAccent-400 font-medium text-2xl'>SquareUp developed a comprehensive booking and reservation system for our event management company</h1>
                        <p className=' text-greyAccent-300 font-light w-[100%]'>Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.</p>
                          <div className='flex mdd:flex-wrap gap-6 justify-between items-center border border-greyAccent-400 p-4'>
                            <div className='flex gap-3'>
                              <div className='w-12 h-12'><img src={profile1} alt="" className='h-full w-full object-cover'/></div>
                              <div>
                                <h1 className='text-white'>John Smith</h1>
                                <p className='text-greyAccent-300 font-light'>CEO of Chic Boutique</p>
                              </div>
                            </div>
                            <div className='rounded-md bg-greyAccent-400 text-white px-4 py-3'>
                              Open Website
                            </div>
                          </div>
                    </div>
                  <div className='flex flex-col gap-8 w-1/2 px-16 lgg:px-8 lgg:py-12 py-20 lgg:w-full lgg:justify-between lgg:flex-wrap'>
                      <h1 className=' text-greenAccent-400 font-medium text-2xl'>ProTech Solutions turned to SquareUp to automate our workflow</h1>
                      <p className=' text-greyAccent-300 font-light w-[100%]'>They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.</p>
                      <div className='flex mdd:flex-wrap gap-6 justify-between items-center border border-greyAccent-400 p-4'>
                        <div className='flex gap-3'>
                          <div className='w-12 h-12'><img src={profile1} alt="" className='h-full w-full object-cover'/></div>
                          <div>
                            <h1 className='text-white'>John Smith</h1>
                            <p className='text-greyAccent-300 font-light'>CEO of Chic Boutique</p>
                          </div>
                        </div>
                        <div className='rounded-md bg-greyAccent-400 text-white px-4 py-3'>
                          Open Website
                        </div>
                      </div>
                  </div>
                  
                </div>
                {/* section-3 */}
                <div className='flex justify-between border-t border-greyAccent-400 ssm:flex-wrap'>
                  <div className='border-r border-greyAccent-400 flex flex-col gap-8 w-1/2 px-16 lgg:px-8 lgg:py-12 py-20 lgg:w-full lgg:justify-between lgg:flex-wrap'>
                    <h1 className=' text-greenAccent-400 font-medium text-2xl'>SquareUp designed and developed a captivating web portal for showcasing our real estate listings.</h1>
                      <p className=' text-greyAccent-300 font-light w-[100%]'>The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.</p>
                        <div className='flex mdd:flex-wrap gap-6 justify-between items-center border border-greyAccent-400 p-4'>
                          <div className='flex gap-3'>
                            <div className='w-12 h-12'><img src={profile1} alt="" className='h-full w-full object-cover'/></div>
                            <div>
                              <h1 className='text-white'>John Smith</h1>
                              <p className='text-greyAccent-300 font-light'>CEO of Chic Boutique</p>
                            </div>
                          </div>
                          <div className='rounded-md bg-greyAccent-400 text-white px-4 py-3'>
                            Open Website
                          </div>
                        </div>
                  </div>
                  <div className='flex flex-col gap-8 w-1/2 px-16 lgg:px-8 lgg:py-12 py-20 lgg:w-full lgg:justify-between lgg:flex-wrap'>
                      <h1 className=' text-greenAccent-400 font-medium text-2xl'>FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.</h1>
                      <p className=' text-greyAccent-300 font-light w-[100%]'>SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.</p>
                      <div className='flex mdd:flex-wrap gap-6 justify-between items-center border border-greyAccent-400 p-4'>
                        <div className='flex gap-3'>
                          <div className='w-12 h-12'><img src={profile1} alt="" className='h-full w-full object-cover'/></div>
                          <div>
                            <h1 className='text-white'>John Smith</h1>
                            <p className='text-greyAccent-300 font-light'>CEO of Chic Boutique</p>
                          </div>
                        </div>
                        <div className='rounded-md bg-greyAccent-400 text-white px-4 py-3'>
                          Open Website
                        </div>
                      </div>
                  </div>
                </div>
            </div>
            </div>

            {/* FAQ  */}

              <div>
                <div className="h-[340px]">
                  <img src={faq} alt="" className="h-full w-full object-cover brightness-75"/>
                </div>
                <div className='py-16 px-10 ssm:px-2'>
                  <Box className="flex flex-wrap">
                      <Accordion sx={{
                        background: "#1E1E1E", 
                        border: 'none',
                        width: "50%", 
                        '@media (max-width: 639px)': {
                          width: '100%'
                        }
                        }} expanded={isExpanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary 
                          className='flex' 
                          expandIcon={isExpanded === 'panel1' ? <CloseIcon sx={{color: "white", fontSize: "26px", }}/> : <AddIcon sx={{color: "white", fontSize: "26px"}} />
                          }>
                            <Box className="flex gap-2">
                              <Box className='p-6 border border-[#333] rounded-md h-20 w-20 grid place-content-center font-medium text-2xl' style={{ color: isExpanded === 'panel1' ? "#C5FF66" : "white" }}>01</Box>
                              <Box paddingTop="20px">
                                <Typography
                                variant='h6' 
                                  style={{ 
                                    color: isExpanded === 'panel1' ? "#C5FF66" : "white" ,
                                  }}>What services does SquareUp provide?</Typography>
                              </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails sx={{marginLeft: "5rem"}}>
                              <Typography variant='p' color="white">
                                  SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.
                              </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion sx={{
                        background: "#1E1E1E", 
                        border: 'none', 
                        width: "50%", 
                        '@media (max-width: 639px)': {
                          width: '100%'
                        }
                      }} expanded={isExpanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary 
                          className='flex' 
                          expandIcon={isExpanded === 'panel2' ? <CloseIcon sx={{color: "white", fontSize: "26px", }}/> : <AddIcon sx={{color: "white", fontSize: "26px"}} />
                          }>
                            <Box className="flex gap-2">
                              <Box className='p-6 border border-[#333] rounded-md h-20 w-20 grid place-content-center font-medium text-2xl' style={{ color: isExpanded === 'panel2' ? "#C5FF66" : "white" }}>02</Box>
                              <Box paddingTop="20px">
                                <Typography
                                  variant='h6'  
                                  style={{ 
                                    color: isExpanded === 'panel2' ? "#C5FF66" : "white" ,
                                  }}>What services does SquareUp provide?</Typography>
                              </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails sx={{marginLeft: "5rem"}}>
                              <Typography variant='p' color="white">
                                  SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.
                              </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion sx={{
                        background: "#1E1E1E", 
                        border: 'none', 
                        width: "50%", 
                        '@media (max-width: 639px)': {
                          width: '100%'
                        }
                        }} expanded={isExpanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary 
                          className='flex' 
                          expandIcon={isExpanded === 'panel3' ? <CloseIcon sx={{color: "white", fontSize: "26px", }}/> : <AddIcon sx={{color: "white", fontSize: "26px"}} />
                          }>
                            <Box className="flex gap-2">
                              <Box className='p-6 border border-[#333] rounded-md h-20 w-20 grid place-content-center font-medium text-2xl' style={{ color: isExpanded === 'panel3' ? "#C5FF66" : "white" }}>03</Box>
                              <Box paddingTop="20px">
                                <Typography 
                                  variant='h6' 
                                  style={{ 
                                    color: isExpanded === 'panel3' ? "#C5FF66" : "white" ,
                                  }}>What services does SquareUp provide?</Typography>
                              </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails sx={{marginLeft: "5rem"}}>
                              <Typography variant='p' color="white">
                                  SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.
                              </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion sx={{
                        background: "#1E1E1E", 
                        border: 'none', 
                        width: "50%", 
                        '@media (max-width: 639px)': {
                          width: '100%'
                        }
                        }} expanded={isExpanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary 
                          className='flex' 
                          expandIcon={isExpanded === 'panel4' ? <CloseIcon sx={{color: "white", fontSize: "26px", }}/> : <AddIcon sx={{color: "white", fontSize: "26px"}} />
                          }>
                            <Box className="flex gap-2">
                              <Box className='p-6 border border-[#333] rounded-md h-20 w-20 grid place-content-center font-medium text-2xl' style={{ color: isExpanded === 'panel4' ? "#C5FF66" : "white" }}>04</Box>
                              <Box paddingTop="20px">
                                <Typography 
                                  variant='h6' 
                                  style={{ 
                                    color: isExpanded === 'panel4' ? "#C5FF66" : "white" ,
                                  }}>What services does SquareUp provide?</Typography>
                              </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails sx={{marginLeft: "5rem"}}>
                              <Typography variant='p' color="white">
                                  SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.
                              </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion sx={{
                        background: "#1E1E1E", 
                        border: 'none', 
                        width: "50%", 
                        '@media (max-width: 639px)': {
                          width: '100%'
                        }
                        }} expanded={isExpanded === 'panel5'} onChange={handleChange('panel5')}>
                        <AccordionSummary 
                          className='flex' 
                          expandIcon={isExpanded === 'panel5' ? <CloseIcon sx={{color: "white", fontSize: "26px", }}/> : <AddIcon sx={{color: "white", fontSize: "26px"}} />
                          }>
                            <Box className="flex gap-2">
                              <Box className='p-6 border border-[#333] rounded-md h-20 w-20 grid place-content-center font-medium text-2xl' style={{ color: isExpanded === 'panel5' ? "#C5FF66" : "white" }}>05</Box>
                              <Box paddingTop="20px">
                              <Typography 
                                variant='h6' 
                                style={{ 
                                  color: isExpanded === 'panel5' ? "#C5FF66" : "white" ,
                                }}>
                                    What services does SquareUp provide?
                              </Typography>
                              </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails sx={{marginLeft: "5rem"}}>
                              <Typography variant='p' color="white">
                                  SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.
                              </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion sx={{
                        background: "#1E1E1E", 
                        border: 'none', 
                        width: "50%", 
                        '@media (max-width: 639px)': {
                          width: '100%'
                        }
                        }} expanded={isExpanded === 'panel6'} onChange={handleChange('panel6')}>
                        <AccordionSummary 
                          className='flex' 
                          expandIcon={isExpanded === 'panel6' ? <CloseIcon sx={{color: "white", fontSize: "26px", }}/> : <AddIcon sx={{color: "white", fontSize: "26px"}} />
                          }>
                            <Box className="flex gap-2">
                              <Box className='p-6 border border-[#333] rounded-md h-20 w-20 grid place-content-center font-medium text-2xl' style={{ color: isExpanded === 'panel6' ? "#C5FF66" : "white" }}>06</Box>
                              <Box paddingTop="20px">
                                <Typography 
                                  variant='h6' 
                                  style={{ 
                                    color: isExpanded === 'panel6' ? "#C5FF66" : "white" ,
                                  }}>What services does SquareUp provide?</Typography>
                              </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails sx={{marginLeft: "5rem"}}>
                              <Typography variant='p' color="white">
                                  SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.
                              </Typography>
                        </AccordionDetails>
                      </Accordion>
                     
                  </Box>
                </div>
              </div>

            {/* Form */}

            <div>
                <div className="h-[480px]">
                  <img src={thankyou} alt="" className="h-full w-full object-cover brightness-75"/>
                </div>
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
                        <button className='rounded bg-greenAccent-500 px-12 py-5 text-lg font-medium ssm:px-8 ssm:py-2' type='submit'>Submit</button>
                      </div>
                  </div>
                </form>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Home;