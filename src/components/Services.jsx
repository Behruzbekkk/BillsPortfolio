import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const services = [
  {
    name: "My Example Projects",
    description:
      "Arduino Robots for Quarantine Protection, Quantative and Qualative Data Construction in Statistics, Synthesized Economics, Online Academy Newcastle, IELTS Academy, Future Blockchain Platform, LeadGlobe Association, TEDxTSUE, TEDxTSUL",
    link: 'Learn More'
  },
  {
    name: "Computer Skills",
    description:
      "I have experience in fields such as CyberSecurity, Platforms(CISCO in CCNA and CCNP level and Linux), Robotics Programming (Arduino) as well as simple applications such as Excel, Word, Zoom, Google Meets and so on.",
    link: 'Learn More'
  },
  {
    name: "Awards",
    description:
      "Certificate and money from 5 Governmental Organizations, International Mathematics and Science Award Certificate with medals, over 4,000,000$ in grant from being accepted to over 67 universities.",
    link: 'Learn More'
  },
];
const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
          variants={fadeIn('right', 0.1)}
          initial= "hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.1}}
          style={{borderRadius: '10px'}} className="flex-1 lg:bg-services lg:bg-left bg-no-repeat">
           {/* /* <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16 col-black">  I'm a freelance Front-end Developer with over 1 years of
              expirience</h3>
              <button className="btn btn-sm">See my work</button> */}
          </motion.div>
          <motion.div
           variants={fadeIn('left', 0.1)}
           initial= "hidden"
           whileInView={'show'}
           viewport={{once: false, amount: 0.1}}
          className="flex-1">
            <div>
              {
                services.map((service, index)=> {
                  const {name, description, link} = service;
                  return (
                    <div className="border-b border-white/20 h-[146px] mb-[36px] flex" key={index}>
                      <div className="max-w-[467px]">
                        <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6" style={{marginLeft: '50px'}}>{name}</h4>
                        <p className="font-secondary leading-tight" style={{marginLeft: '50px', fontSize: "16px"}}>{description}</p>
                      </div>
                      <div className="flex flex-col flex-1 items-end" style={{marginLeft: '50px'}}>
                        <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                          <BsArrowUpRight/>
                        </a>
                        <a href="#" className="text-gradient text-sm">{link}</a>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
