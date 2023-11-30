import React, { Component } from 'react';
import {motion} from 'framer-motion';
import { styles } from '../Styles';
import { staggerContainer } from '../Utils/Motion';

const Sectionwrapper = (Component, idName) => 
function HOC(){
  return (
    <motion.section
     variants={staggerContainer()}
     initial="hidden"
     whileInView="show"
     viewport={{once:true, amount:0.25}}
     className= {`${styles.padding} min-w-7xl 
     mx-auto relative z-0`}
    >
        <span className='hash-span' id={idName}>
            &nbsp;
        </span>

        <Component />

    </motion.section>
  )
}

export default Sectionwrapper