import React, { useState, useEffect } from 'react'
import '../App.css'
import Logo from '../components/Logo'
import Logo2 from '../components/Logo2'
import {motion} from 'framer-motion'
function Hero() {

    const [color, setColor]= useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
          setColor((color + 1) % 3)
        }, 2050)
    
        // Cleanup on unmount
        return () => clearInterval(intervalId)
      }, [color])

      const container = {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.2,
          }
        }
      }

      const slide = {
        hidden: { opacity: 0, x:200 },
        show: { opacity: 1,
                x:0, 
                transition:{
                    duration:3
                }
        }
      }
      
      useEffect(()=>{
        console.log(window.innerWidth)
      },[])

  return (

    <motion.div initial={{y:-50}} whileInView={{y:0}} transition={{duration:1}} viewport={{once:true}} className='relative w-screen  md:h-[calc(100vh-100px)] flex flex-col items-center justify-center leading-10 gap-7' >
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2.5}} viewport={{once:true}} className='p-4 text-center ' >
            <h1 className='word transition-opacity duration-300 text-white overflow-y-hidden  font-bold text-5xl  lg:text-6xl xl:text-7xl mb-[30px] leading-[50px] w-[80vw] sm:w-[90vw]  md:w-[950px] lg:w-[1100px] xl:w-[1300px]  mx-auto p-4 ' >Your Search for a 
              <span  className={`text-transparent bg-clip-text test  fancy  `} > Web Developer </span> 
            Ends Here.</h1>
            <p className='font-medium text-[14px] lg:text-[18px] text-white leading-7 w-[300px] sm:w-[450px] md:w-[600px] lg:w-[800px] mx-auto' >Hey there, I'm Wassim, a 21 year-old front-end developer and computer science student. Crafting seamless, captivating web experiences that merge design and technology is my passion.</p>
        </motion.div>

        <motion.div initial='hidden' whileInView='show' variants={container} viewport={{once:true}}  className='grid grid-cols-3 gap-6 md:grid-cols-7' >
            <Logo url='/images/react-logo2.png' />
            <Logo url='/images/firebase-logo.png' />
            <Logo url='/images/tailwind-logo.png' /> 
            <Logo url='/images/figma-logo.png' />
            <Logo url='/images/nodejs-logo.png' />
            <Logo url='/images/sql-logo.png' />
            <Logo2 url='/images/next-logo.png' />
        </motion.div>
    </motion.div>
  )
}

export default Hero