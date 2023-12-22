import services from "../assets/services.svg"
import container from "../assets/servicespage/container.svg"
import research from "../assets/servicespage/research.svg"
import message from "../assets/servicespage/message.svg"
import test from "../assets/servicespage/test.svg"
import design from "../assets/servicespage/design.svg"
import intuitive from "../assets/servicespage/intuitive.svg"
import illustration from "../assets/servicespage/illustration.svg"
import typography from "../assets/servicespage/typography.svg"
import responsive from "../assets/servicespage/responsive.svg"
import circle from "../assets/servicespage/circle.svg"
import brand from "../assets/servicespage/brand.svg"
import guide from "../assets/servicespage/guide.svg"
import book from "../assets/servicespage/book.svg"
import frontend from "../assets/servicespage/frontend.svg"
import backend from "../assets/servicespage/backend.svg"
import cms from "../assets/servicespage/cms.svg"
import ecom from "../assets/servicespage/ecom.svg"
import mobile from "../assets/servicespage/mobile.svg"
import mobdev from "../assets/servicespage/mobdev.svg"
import prototype from "../assets/servicespage/prototype.svg"
import testing from "../assets/servicespage/testing.svg"
import enterprise from "../assets/servicespage/enterprise.svg"
import monitor from "../assets/servicespage/monitor.svg"
import thirdparty from "../assets/servicespage/thirdparty.svg"
import system from "../assets/servicespage/system.svg"
import analysis from "../assets/servicespage/analysis.svg"
import barchart from "../assets/servicespage/barchart.svg"
import assignment from "../assets/servicespage/assignment.svg"
import ServiceCard from "../components/ServiceCard"
import iterative from "../assets/servicespage/iterative.svg"
import database from "../assets/servicespage/database.svg"
import bag from "../assets/servicespage/bag.svg"
import magic from "../assets/servicespage/magic.svg"
import tools from "../assets/servicespage/tools.svg"
import puzzle from "../assets/puzzle.svg"
import shield from "../assets/shield.svg"
import graph from "../assets/servicespage/graph.svg"


const Services = () => {
  return (
    <div>
        <div className="ssm:h-[350px]">
          <img src={services} alt="" className="h-full w-full object-cover brightness-75"/>
        </div>
        <div className="pt-36 pb-6"> 
          <div className="text-white flex flex-col gap-2 border-b border-greyAccent-400 pb-14 px-20 lgg:px-8">
            <h1 className="font-semibold text-5xl">Design</h1>
            <p className="text-greyAccent-800 w-[65%] lgg:w-full">At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. </p>

            <div className="mt-14">
              <button className="rounded bg-greyAccent-400 px-3 py-1 font-light">Our design services include:</button>
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-semibold text-2xl px-20 lgg:px-8 text-greyAccent-800 ssm:text-center">User Experience (UX) Design</h2>
            <div className="flex px-12 lgg:px-6 ssm:px-4 mt-12 border border-greyAccent-400 mdd:flex-wrap">
                <ServiceCard title="User Research and Persona Development" img={research}/>    
                <ServiceCard title="Information Architecture and Wireframing" img={message}/>    
                <ServiceCard title="Interactive Prototyping and User Testing" img={test}/>    
                <ServiceCard title="UI Design and Visual Branding" img={design}/> 
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-semibold text-2xl px-20 lgg:px-8 text-greyAccent-800 ssm:text-center">User Interface (UI) Design</h2>
            <div className="flex px-12 lgg:px-6 ssm:px-4 mt-12 border border-greyAccent-400 mdd:flex-wrap">
                <ServiceCard title="Intuitive and Visually Appealing Interface Design" img={intuitive}/>    
                <ServiceCard title="Custom Iconography and Illustration" img={illustration}/>    
                <ServiceCard title="Typography and Color Palette Selection" img={typography}/>    
                <ServiceCard title="Responsive Design for Various Devices" img={responsive}/> 
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-semibold text-2xl px-20 lgg:px-8 text-greyAccent-800 ssm:text-center">Branding and Identity</h2>
            <div className="flex px-12 lgg:px-6 ssm:px-4 mt-12 border border-greyAccent-400 mdd:flex-wrap">
                <ServiceCard title="Logo Design and Visual Identity Development" img={circle}/>    
                <ServiceCard title="Brand Strategy and Positioning" img={brand}/>    
                <ServiceCard title="Brand Guidelines and Style Guides" img={guide}/>    
                <ServiceCard title="Marketing Collateral Design (Brochures, Business Cards, etc.)" img={book}/> 
            </div>
          </div>

          <div>
            <div className="pt-28">
            <div className="text-white flex flex-col gap-2 border-b border-greyAccent-400 pb-14 px-20 lgg:px-8">
                  <h1 className="font-semibold text-5xl pb-2">Engineering</h1>
                  <p className="text-greyAccent-800 w-[65%] lgg:w-full">Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.</p>
                  <div className="mt-14 pb-6">
                    <button className="rounded bg-greyAccent-400 px-3 py-1 font-light">Our engineering services include:</button>
                  </div>
              </div>
              <div className="mt-14">
                <h2 className="font-semibold text-2xl px-20 lgg:px-8 text-greyAccent-800 ssm:text-center">Web Development</h2>
                <div className="flex px-12 mt-8 border border-greyAccent-400 mdd:flex-wrap ssm:px-6">
                    <ServiceCard title="Front-End Development (HTML, CSS, JavaScript)" img={frontend}/>    
                    <ServiceCard title="Back-End Development (PHP, Python, Ruby)" img={backend}/>    
                    <ServiceCard title="Content Management System (CMS) Development (WordPress, Drupal)" img={cms}/>    
                    <ServiceCard title="E-Commerce Platform Development (Magento, Shopify)" img={ecom}/> 
                </div>
              </div>
              <div className="mt-14">
                <h2 className="font-semibold text-2xl px-20 lgg:px-8 text-greyAccent-800 ssm:text-center">Mobile App Development</h2>
                <div className="flex px-12 mt-8 border border-greyAccent-400 mdd:flex-wrap ssm:px-6">
                    <ServiceCard title="Native iOS and Android App Development" img={mobile}/>    
                    <ServiceCard title="Cross-Platform App Development (React Native, Flutter)" img={mobdev}/>    
                    <ServiceCard title="App Prototyping and UI/UX Design Integration" img={prototype}/>    
                    <ServiceCard title="App Testing, Deployment, and Maintenance" img={testing}/> 
                  </div>
              </div>
              <div className="mt-14">
                <h2 className="font-semibold text-2xl px-20 lgg:px-8 text-greyAccent-800 ssm:text-center">Custom Software Development</h2>
                <div className="flex px-12 mt-8 border border-greyAccent-400 mdd:flex-wrap ssm:px-6">
                    <ServiceCard title="Enterprise Software Development" img={enterprise}/>    
                    <ServiceCard title="Custom Web Application Development" img={monitor}/>    
                    <ServiceCard title="Integration with Third-Party APIs and Systems" img={thirdparty}/>    
                    <ServiceCard title="Legacy System Modernization and Migration" img={system}/> 
                </div>
              </div>
            </div>
          </div>

          <div className="pt-28">
            <div className="text-white flex flex-col gap-2 border-b border-greyAccent-400 pb-14 px-20 lgg:px-8">
                <h1 className="font-semibold text-5xl pb-2">Project Management</h1>
                <p className="text-greyAccent-800 w-[65%] lgg:w-full">Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.</p>
                <div className="mt-14 pb-6">
                  <button className="rounded bg-greyAccent-400 px-3 py-1 font-light">Our project management services include:</button>
                </div>
            </div>
            <div className="mt-14">
                <h2 className="font-semibold text-2xl px-20 lgg:px-8 text-greyAccent-800 ssm:text-center">Project Planning and Scoping</h2>
                <div className="flex px-12 mt-8 border border-greyAccent-400 mdd:flex-wrap ssm:px-6">
                  <ServiceCard title="Requirements Gathering and Analysis" img={analysis}/>    
                  <ServiceCard title="Project Roadmap and Timeline Development" img={barchart}/>    
                  <ServiceCard title="Resource Allocation and Task Assignment" img={assignment}/>    
                  <ServiceCard title="Risk Assessment and Mitigation Strategies" img={barchart}/>    
                </div>
            </div>
            <div className="mt-14">
                <h2 className="font-semibold text-2xl px-20 lgg:px-8 text-greyAccent-800 ssm:text-center">Agile Development</h2>
                <div className="flex px-12 mt-8 border border-greyAccent-400 mdd:flex-wrap ssm:px-6">
                  <ServiceCard title="Iterative Development and Sprints" img={iterative}/>    
                  <ServiceCard title="Scrum or Kanban Methodology Implementation" img={database}/>    
                  <ServiceCard title="Regular Progress Updates and Demos" img={bag}/>    
                  <ServiceCard title="Continuous Improvement and Feedback Incorporation" img={magic}/>    
                </div>
            </div>
            <div className="mt-14">
                <h2 className="font-semibold text-2xl px-20 lgg:px-8 text-greyAccent-800 ssm:text-center">Quality Assurance and Testing</h2>
                <div className="flex px-12 mt-8 border border-greyAccent-400 mdd:flex-wrap ssm:px-6">
                  <ServiceCard title="Test Planning and Execution" img={puzzle}/>    
                  <ServiceCard title="Functional and Usability Testing" img={shield}/>    
                  <ServiceCard title="Performance and Security Testing" img={graph}/>    
                  <ServiceCard title="Bug Tracking and Issue Resolution" img={tools}/>    
                </div>
            </div>
          </div>
          <div>
            <img src={container} alt="" className="h-full w-full object-cover brightness-75"/>
          </div>
        </div>
    </div>
  )
}

export default Services;