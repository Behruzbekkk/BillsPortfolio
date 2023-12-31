import React from "react";
// images
import avatar from "../assets/avatar.jpg";
// icons
import { FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-start"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Abzalov <span>Biloliddin</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="mt-8 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I'm a</span>
              <TypeAnimation
                sequence={[
                  "Data Scientist",
                  2000,
                  "Freelancer",
                  2000,
                  "Director",
                  2000,
                  "4,000,000$ Grant Holder",
                  2000,
                ]}
                speed={[20]}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }} className="mb-8 max-auto lg:mx-0 lg:px-[30px 110px]">
              My goal is to change lives of every student, bring knowledge into every corner of the world and  with it, bring everyone with me.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.1 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg"><a href="tel:+998 94 647 63 07">Contact me</a></button>
              <a href="https://t.me/heloclay" className="text-gradient btn-link">
                Telegram
              </a>
              <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaGithub />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </motion.div>
          </div>
          {/* img */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto  "
          >
            <img className="picture" src={avatar} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
