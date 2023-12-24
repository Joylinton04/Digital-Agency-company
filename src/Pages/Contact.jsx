import Form from "../components/Form";
import squarebox from '../assets/about/squarebox.svg'
import contact from '../assets/contact/contact.svg'
import { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import faq from '../assets/faq.svg'
import message from "../assets/message.svg"
import location from "../assets/location.svg"
import phone from "../assets/phone.svg"
import facebook from "../assets/facebook.svg"
import linkedin from "../assets/linkedin.svg"
import twitter from "../assets/twitter.svg"



const Contact = () => {

  const [isExpanded, setIsExpanded] = useState(null);
  const [range, setRange] = useState(1000)

  const handleChange = (panel) => () => {
    setIsExpanded(prev => prev === panel ? null : panel);
    console.log('expanded')
  };

  return (
    <div>
      <div className='mdd:h-[350px]'>
        <img src={contact} alt="" className="h-full w-full object-cover brightness-75"/>
      </div>

      <div>
        <div className="flex justify-center py-10 text-greyAccent-900">
          <div className="flex gap-10 ssm:flex-wrap ssm:p-1 ssm:justify-center">
              <div className="flex bg-[#1e1e1e] px-2 py-1 rounded-md">
                  <img src={message} alt="" className="w-6 h-6 object-contain"/>
                  <p>hello@squareup.com</p>
              </div>
              <div className="flex bg-[#1e1e1e] px-2 py-1 rounded-md">
                  <img src={phone} alt="" className="w-6 h-6 object-contain"/>
                  <p>+91 91813 23 2309</p>
              </div>
              <div className="flex bg-[#1e1e1e] px-2 py-1 rounded-md">
                  <img src={location} alt="" className="w-6 h-6 object-contain"/>
                  <p>Somewhere in the World</p>
              </div>
          </div>
        </div>
          <div className="border border-greyAccent-400">
            <Form/>
            <div className="flex justify-between border-t border-greyAccent-400 text-greyAccent-900 py-10 mdd:flex-wrap mdd:gap-6">
                <div className="w-1/2 flex justify-end items-center border-r border-greyAccent-400 px-20 gap-2 mdd:w-full mdd:border-r-0 mdd:justify-center mdd:border-b mdd:pb-10">
                  <div className="text-greyAccent-900">Operating Days</div>
                  <div>
                    <button className="rounded bg-greyAccent-400 px-3 py-1 font-light">Monday to Friday</button>
                  </div>
                </div>
                <div className="w-1/2 flex px-20 mdd:w-full">
                  <div className="flex gap-3 px-3 py-2 rounded bg-[#171717] items-center lgg:grow mdd:justify-center">
                      <p className="text-greyAccent-800">Stay Connected</p>
                      <img src={facebook} alt="" className='h-20 w-20 object-cover border border-[#333] p-6 rounded-md'/>
                      <img src={linkedin} alt="" className='h-20 w-20 object-cover border border-[#333] p-6 rounded-md'/>
                      <img src={twitter} alt="" className='h-20 w-20 object-cover border border-[#333] p-6 rounded-md'/>
                  </div>
                </div>
            </div>
          </div>
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

export default Contact;