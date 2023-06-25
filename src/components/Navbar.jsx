import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close, linkedin } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false)
  return (
   <nav className={`${styles.paddingX} w-full flex-items-center py-5 fixed top-0 z-20 bg-primary`}>
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      <div className='flex'>
      <Link to='/' className='flex items-center gap-2' onClick={() => {
        setActive('');
        window.scrollTo(0,0);
      }}>
        <img src={logo} alt="" className='w-9 h-9 object-contain' />
        <p className='text-white text-[18px] font-bold cursor-pointer flex'>Sanket &nbsp; <span className='sm:block hidden'>| Sanket Shinde</span></p>
      </Link>
      <a  href='https://www.linkedin.com/in/sanket-shinde-71904b1b6/' className='ml-5'><img src={linkedin} className='w-8' alt="" /></a>
      </div>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
        { navLinks.map((Link) => (
          <li key={Link.id} className={`${ active === Link.title? "text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(Link.title)}>
            <a href={`#${Link.id}`}>{Link.title}</a>
          </li>
        ))}
         <li className= "text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
            <a href='https://drive.google.com/file/d/1FjYh4ZHabmsdtXAikWG-llNB6KLQD6ga/view?usp=drive_link'>Resume</a>
        </li>
      </ul>

      {/* Navbar For Mobile Devices */}

      <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={ toggle ? close: menu}
          alt='menu'
          className='w-[28px] h-[28px] objext-contain cursor-pointer' onClick={() => setToggle(!toggle)}/>
          <div className={`${!toggle ? 'hidden ' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-0 my-2 min-w-[140px] z-10  wounded-xl`}>
               <ul className='list-none flex justify-end items-start flex-col gap-4'>
                { navLinks.map((Link) => (
                  <li key={Link.id} 
                  className={`${ active === Link.title? "text-white":"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} 
                  onClick={() => {
                    setToggle(!toggle); 
                    setActive(Link.title)
                  }}>
                    <a href={`#${Link.id}`}>{Link.title}</a>
                  </li>
                ))}
              </ul>
          </div>
      </div>
    </div>
     
   </nav>
  )
}

export default Navbar