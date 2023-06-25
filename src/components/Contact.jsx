import React from 'react'
import { useState,useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
//B-9LkoiQb1O-NL9GA
//template_88rz1cn
//service_2oxlmig

const Contact = () => {
  const formref = useRef();
  const [form, setform] = useState({
    name:'',
    email:'',
    message:'',
  })

  const [loading, setloading] = useState(false)

  const handleChange = (e) => {
    const {name,value} = e.target;
    setform({...form,[name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading();
    emailjs.send('service_2oxlmig','template_88rz1cn',{
      from_name: form.name,
      to_name:'Sanket',
      from_email:form.email,
      to_email:'ssanket378@gmail.com',
      message:form.message,
    },
    'B-9LkoiQb1O-NL9GA'
    )
    .then(() => {
      setloading(false);
      alert('Thank you for reaching out,I will get back to you as soon as possible.')
      setform({
        name:'',
        email:'',
        message:'',
      })
    },(error) => {
      setloading(false);
      console.log(error);
      alert("Something Went Wrong")
    }
    )
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left','tween',0.2,1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formref} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input type='text' name='name' value={form.name} onChange={handleChange} placeholder="What's Your Name?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input type='email' name='email' value={form.email} onChange={handleChange} placeholder="What's Your Email?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <textarea rows='7'  name='message' value={form.message} onChange={handleChange} placeholder="Message" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium'/>
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading? 'Sending.....' : 'Send'}
          </button>
        </form>
      </motion.div>

    <motion.div variants={slideIn('right','tween',0.2,1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
      <EarthCanvas/>
        
    </motion.div>


    </div>
  )
}

export default SectionWrapper(Contact,'contact')