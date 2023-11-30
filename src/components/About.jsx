import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../Styles';
import { services } from '../Constants';
import { fadeIn, textVariant } from '../Utils/Motion';
import { Tilt } from 'react-tilt';
import { Sectionwrapper } from '../hoc';

const About = () => {

  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-full ">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-[#011F5D] rounded-[20px] py-5 px-12 min-h-[280px]
            flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className='text-white text-[20px] font-bold text-center'>
              {title}
            </h3>

          </div>

        </motion.div>

      </Tilt>

    )
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        <div >
          <p className={styles.sectionSubText}>
            Introduction
          </p>
          <h2 className={styles.sectionHeadText}>
            Overview.
          </h2>

        </div>

      </motion.div>
      <motion.p 
      variants={fadeIn("", "", 0.1, 1) }
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ">
        I'm a skilled software developer with expertise in Typescript, JavaScript and expertise in frameworks like
        React, Node.js and Three.js. I am a quick learner and collaborate closely with clients to create efficient,
        Scalable user-friendly solutions.

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}

      </div>


    </>
  )
}

export default Sectionwrapper(About, "about")