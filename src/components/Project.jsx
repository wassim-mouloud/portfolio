import React, { useState } from 'react'
import {motion} from 'framer-motion'
import '../App.css'

function Project({name, description, img, vid, projectLink, skills}) {

    const [hovered, setHovered]= useState(false)
    const {s1, s2, s3} = skills
    
    const onMouseEnter = ()=>{
        setHovered(true)
    }
    const onMouseLeave = ()=>{
        setHovered(false)
    }

    const container = {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.5,
          }
        }
      }

      const appear = {
        hidden: { opacity: 0},
        show: { opacity: 1,
                transition:{
                    duration:1.5
                }
        }
      }

        return (
            <motion.div  initial='hidden' whileInView='show' variants={container} viewport={{once:true}} className='flex flex-col items-center justify-center gap-10 px-5 mt-6 mb-5 md:flex-row rounded-xl' >
                <motion.div onMouseEnter={()=>onMouseEnter()} onMouseLeave={()=>onMouseLeave()} variants={appear} viewport={{once:true}} className='relative order-2 md:order-1'>
                                <video 
                                    src={`/videos/${vid}.mp4`}  
                                    autoPlay={true}
                                    muted 
                                    loop 
                                    className='md:w-[400px] lg:w-[550px] absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 object-contain rounded-xl'
                                />
                                <motion.img  src={`/images/${img}.png`} alt="" className='w-[90vw] md:w-[400px] lg:w-[550px]   object-contain rounded-xl'/>
                </motion.div>
                <motion.div variants={appear} viewport={{once:true}} className='flex flex-col justify-center gap-5 md:w-[400px] order-1 md:order-2' >
                    <h2 className='font-semibold text-white md:text-[26px] lg:text-[32px]' >{name}</h2>
                    <div className='flex gap-3' >
                        <img src={`/images/${s1}-logo.png`} alt="" className='w-8 h-8'/>
                        <img src={`/images/${s2}-logo.png`} alt="" className='w-8 h-8'/>
                        {s3 && (<img src={`/images/${s3}-logo.png`} alt="" className='w-8 h-8'/>)}
                    </div>
                    <p className='text-white font-normal max-w-[90vw] md:text-[16px] lg:text-[18px]' >{description}</p>
                    <a href={projectLink} target='_blank'><button className='group flex items-center justify-center h-9  border border-white  rounded-md bg-[#0d0d0d]  w-[220px] p-3  transition-all duration-300 btn' ><p className='font-semibold text-white transition-all duration-300 group-hover:text-[#0d0d0d] z-[99]' >Visit website</p></button></a>
                </motion.div>
        </motion.div>
        )
    }  


export default Project