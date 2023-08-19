import React from "react";
// countup
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inViwe] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="aboutme" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-left lg:gap-x-20 lg:gap-y-0 h-screen">
        
          <motion.div
          variants={fadeIn('right', 0.1)}
          initial= "hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.1}}
          className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">
          </motion.div>
          <motion.div
           variants={fadeIn('left', 0.1)}
           initial= "hidden"
           whileInView={'show'}
           viewport={{once: false, amount: 0.1}}
          className="flex-1">
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a highly educated freelancer with experience in various fields
            </h3>
            <p className="mb-6">
              Teacher and Consultant in Service Production (Newcastle School), Physics and General English Teacher (Premier Education Center), Former Student and Volunteer (Merit Education Center), Waiter (TeaRoom), TedEd Talk Newcastle Organizer and Speaker, International Competitor in International Qualification (World Mathematics Invitational and PIMSO Competition), Result School Speaker (TedEd Result), Java Developing Team (Java Team), High Skilled Participant and Speaker (American Education Center), Director (IELTS Academy), Main Organizer (LeadGlobe Association, TEDxTSUE, TEDxTSUL)
            </p>
            <div className="flex gap-x-6 1g:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inViwe ? <CountUp start={0} end={4} duration={5} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  
                  Years of <br />
                  Expirience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inViwe ? <CountUp start={0} end={10} duration={5} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inViwe ? <CountUp start={0} end={67} duration={5} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Universities <br />
                  Accepted into
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
