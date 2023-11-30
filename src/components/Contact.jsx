import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../Styles';
import { EarthCanvas } from './canvas';
import { Sectionwrapper } from '../hoc';
import { slideIn } from '../Utils/Motion';



const Contact = () => {

  const formRef = useRef()

  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setloading] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target

    setform({ ...form, [name]: value })
  }

  const handlesubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      alert('Fill all the fields')
      return;
    }
    setloading(true)

    emailjs.send(
      'service_22qx25a',
      'template_9w9rp2r',
      {
        from_name: form.name,
        to_name: "Danial",
        from_email: form.email,
        to_email: "danialahsanvirtuenetz@gmail.com",
        message: form.message,
      },
      "fdtvH2pHKOY1i5YB9"
    )
      .then(() => {
        setloading(false)
        alert('Thankyou. I will get back to you as soon as possible.')

        setform({
          name: '',
          email: '',
          message: '',
        }, (error) => {
          setloading(false),
            console.log(error),

            alert('Something went wrong.')
        })
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap- overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}> Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handlesubmit}
          className="mt-12 flex flex-col gap-8">
          <label className='flex flex-col'>

            <span className='text-white font-medium mb-4'>
              Your name
            </span>
            <input type="text"
              name='name'
              value={form.name}
              onChange={handlechange}
              placeholder="What is Your Name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white
            rounded-lg outline-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>

            <span className='text-white font-medium mb-4'>
              Your email
            </span>
            <input type="text"
              name='email'
              value={form.email}
              onChange={handlechange}
              placeholder="What is Your Email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white
                 rounded-lg outline-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>

            <span className='text-white font-medium mb-4'>
              Your message
            </span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handlechange}
              placeholder="What do you want to say"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white
                  rounded-lg outline-none border-none font-medium'/>
          </label>
          <button type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white 
          font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? "Sending" : " Send"}

          </button>

        </form>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] hidden md:block"
      >
        <EarthCanvas />

      </motion.div>

    </div>
  )
}

export default Sectionwrapper(Contact, "contact")