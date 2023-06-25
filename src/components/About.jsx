import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
const ServiceCard = ({index,title,icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full" >
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div 
      options ={{
        max:45,
        scale:1,
        speed:450
      }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>  
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      
      <motion.p 
          variants={fadeIn("", "",0.5,1)}  
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            Hi, I am a fresher software engineer. I have a strong foundation in programming languages, with expertise in C++, JavaScript, ReactJS, NodeJS, PHP, MySQL, and MongoDB. I am a quick learner and a problem solver, and I am eager to learn new technologies and contribute to the team.
            In my previous role as a software engineering intern at AllEvents.in, I worked on a variety of projects, including developing a new feature for the core website, building a web application, and maintaining a database.I am confident that I have the skills and experience necessary to be a valuable asset to your team. 
            I am a hard worker and I am always willing to go the extra mile. I am also a team player and I am always willing to help others.
            I am excited about the opportunity to work with your team and contribute to the development of innovative products. Thank you for your time and consideration.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
    </>
    )
}



export default SectionWrapper(About,'about')