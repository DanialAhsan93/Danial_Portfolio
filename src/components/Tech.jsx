import React from 'react';
import { Sectionwrapper } from '../hoc';
import { technologies } from '../Constants';
import { BallCanvas } from './canvas';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import "./tech.css"
// import { technologies } from '../Constants';
const Tech = () => {
  return (
    <>
      <div className='hidden lg:block'>
        <div className='flex flex-wrap flex-row justify-center sm:gap-10 gap-10'>
          {technologies.map((technology) => (
            <div className='sm:w-48 sm:h-48 w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}

        </div>
      </div>

      <div className='lg:hidden md:block'>
        <div className='flex flex-wrap flex-row justify-center sm:gap-10 gap-10 '>


          {technologies.map((technology) => (

            <motion.div>
              <Tilt option={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
                className="bg-tertiary rounded-2xl"
              >
                <div className=''>
                  <div className='flex flex-row items-center justify-center 
                  sm:w-45 sm:h-48 w-28 h-28 ' key={technology.name}>
                    <div className=' icon-bg borderwave'>
                      <img src={technology.icon} alt="" className="w-16 h-16 object-contain " />
                    </div>
                  </div>
                </div>


              </Tilt>
            </motion.div>
          ))}

        </div>

      </div>

    </>


  )
}

export default Sectionwrapper(Tech, "")