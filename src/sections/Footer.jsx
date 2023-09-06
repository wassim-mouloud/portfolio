import {React, useState} from 'react'
import '../App.css'
import {motion} from 'framer-motion'

function Footer() {

    const [emailHovered, setEmailHovered] = useState(false)
    const [discordHovered, setdiscordHovered] = useState(false)
    const [linkedinHovered, setLinkedinHovered] = useState(false)

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
                    duration:0.5
                }
        }
      }



  return (
    <motion.div initial='hidden' whileInView='show' variants={container} viewport={{once:true}} className='flex flex-col items-center justify-center w-screen gap-4 mb-10 mt-14' >
        <motion.h1 variants={appear} viewport={{once:true}} className='text-[32px] lg:text-[50px] font-bold text-white' >Contact</motion.h1>
        <motion.p variants={appear} viewport={{once:true}} className='px-4 text-center text-white md:text-[22px] md:w-[900px]' >You like my work and you're interested in working together? you can contact me through E-mail, Discord or LinkedIn.</motion.p>

        <motion.div variants={appear} viewport={{once:true}} className='flex flex-col gap-4 mt-6 md:gap-6 md:flex-row' >
            <a href="mailto: wassim.mouloud10@gmail.com">
                <button onMouseEnter={()=> setEmailHovered(true)} onMouseLeave={()=> setEmailHovered(false)} className=' group h-[50px] w-[240px] rounded-md bg-black  flex justify-center items-center gap-3 border border-white btn2'>
                    <img src={`${emailHovered && window.innerWidth>1024?'/images/black-mail.png':'/images/white-mail.png'}`} alt="" className='w-6 h-6 z-[99]' />
                    <p className='text-white group-hover:md:text-black font-semibold text-[18px] z-[99]' >E-mail</p>
                </button>
            </a>
            <button onMouseEnter={()=> setdiscordHovered(true)} onMouseLeave={()=> setdiscordHovered(false)} className='group h-[50px] w-[240px] rounded-md bg-black border border-[#7289da] flex justify-center items-center gap-4 btn3'>
                <img src={`${discordHovered && window.innerWidth>1024?'/images/white-discord.png':'/images/discord.png'}`} alt="" className='w-6 h-6 z-[99]' />
                <p className='text-[#7289da] group-hover:md:text-white font-semibold text-[18px] z-[99]' >Discord</p>
            </button>
            <a href="https://www.linkedin.com/feed/" target='_blank'>
                <button  onMouseEnter={()=>setLinkedinHovered(true)} onMouseLeave={()=>setLinkedinHovered(false)} className='group h-[50px] w-[240px] rounded-md bg-black border border-[#0b66c2] flex justify-center items-center gap-4 btn4'>
                    <img src={`${linkedinHovered && window.innerWidth>1024?'/images/white-linkedin.png':'/images/linkedin.png'}`} alt="" className='w-6 h-6 z-[99]' />
                    <p className='text-[#0b66c2] group-hover:md:text-white font-semibold text-[18px] z-[99]' >LinkedIn</p>
                </button>
            </a>
        </motion.div>
    </motion.div>
  )
}

export default Footer