import React, { useEffect, useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../Styles';
import { github } from '../assets';
import { Sectionwrapper } from '../hoc';
import { projects } from '../Constants';
import { fadeIn, textVariant } from '../Utils/Motion';

const ProjectCards = ({ index, name, description,
  tags, image, source_code_link, source_link }) => {
  const isWideScreen = window.innerWidth > 786;
  const characterLimit = 35;

  // Check if the link text is longer than the character limit
  const displayLink = source_link.length > characterLimit
    ? `${source_link.substring(0, characterLimit)}...`
    : source_link;

  return (
    <motion.div
      // variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      variants={isWideScreen ? fadeIn("right", "spring", 0.5 * index, 0.75) : {}}

    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className=' relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center 
             items-center cursor-pointer"
            >
              <img src={github} alt="github"
                className='w-1/2 h-1/2 object-contain'
              />
            </div>

          </div>

        </div>
        <div className='mt-5 '>

          <h3>{name}</h3>
          <p className='text-secondary text-[14px]'>{description}</p>
        </div>

        <div className="mt-5 " onClick={() => window.open(source_link, "_blank")}>
          <p className='text-[12px] text-green-500 from-green-400 to-green-600 cursor-pointer'>
            {displayLink}
          </p>
        </div>

        <div className='mt-20 flex flex-wrap gap-10 '>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}

            </p>
          ))}

        </div>

      </Tilt>
    </motion.div>



  )
}

const Works = () => {

  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real world examples of my work.
          Each project is briefly described with links to code with repositries and live demos in it.

        </motion.p>

      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCards
            key={`projects-${index}`}
            {...project}
            index={index}
          />
        ))}

      </div>
    </>
  )
}

export default Sectionwrapper(Works, "")

