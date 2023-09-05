import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import '../App.css'

function Navbar() {

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const [isHovered, setIsHovered]= useState(false);
  const [isHovered2, setIsHovered2]= useState(false);
  const [twitterHovered, setTwitterHovered] = useState(false)
  const [instagramHovered, setInstagramHovered] = useState(false)
  const [linkedinHovered, setLinkedinHovered] = useState(false)
  const [githubHovered, setGithubHovered] = useState(false)


  const onMouseEnter = ()=>{
    setIsHovered(true)
  }
  const onMouseLeave = ()=>{
    setIsHovered(false)
  }

  const onMouseEnter2 = ()=>{
    setIsHovered2(true)
  }
  const onMouseLeave2 = ()=>{
    setIsHovered2(false)
  }

  const handleTwitterenter= ()=>setTwitterHovered(true)
  const handleTwitterleave= ()=>setTwitterHovered(false)

  const handleGithubenter= ()=>setGithubHovered(true)
  const handleGithubleave= ()=>setGithubHovered(false)

  const handleInstagramenter= ()=>setInstagramHovered(true)
  const handleInstagramleave= ()=>setInstagramHovered(false)

  const handleLinkedinenter= ()=>setLinkedinHovered(true)
  const handleLinkedinleave= ()=>setLinkedinHovered(false)

  const [gradient, setGradient] = useState(false)

  useEffect(() =>{
    async function test(){
      await sleep(1750)
      setGradient(true)
    }

    test()
  }  , [])

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      }
    }
  }

  const container2 = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.6,
      }
    }
  }

  const slideRight = {
    hidden: { opacity: 0, x:200 },
    show: { opacity: 1,
            x:0, 
            transition:{
                duration:0.5
            }
    }
  }

  const slideLeft = {
    hidden: { opacity: 0, x:100 },
    show: { opacity: 1,
            x:0, 
            transition:{
                duration:1
            }
    }
  }

  async function x() {
    await sleep(3500)
    return 'x'
  }

  return (
    <div className='w-full h-[50px] flex justify-end md:justify-between items-center   top-0 z-[99] px-4 md:px-6 lg:px-8 mt-10 mb-4 md:mb-0' >
      <motion.div initial='hidden' whileInView='show' variants={container2} viewport={{once:true}} className='flex gap-6'>

        <a href="#projects">
          <motion.button onMouseEnter={()=>onMouseEnter()} onMouseLeave={()=>onMouseLeave()} variants={slideLeft} viewport={{once:true}}  className='group border transparent hover:border-white bg-white hover:bg-black hidden md:flex justify-center items-center gap-4 h-10 w-[170px] rounded-md bg'>
            <img src={isHovered?'/images/white-projects.png':'/images/black-projects.png'} alt="" className='w-6 h-6'/>
            <p className='font-semibold text-black group-hover:text-white' >Projects</p>
          </motion.button>
        </a>

        <a href="mailto: wassim.mouloud10@gmail.com">
          <motion.button onMouseEnter={()=>onMouseEnter2()} onMouseLeave={()=>onMouseLeave2()} variants={slideLeft} viewport={{once:true}}  className={`group  border border-transparent hidden md:flex justify-center items-center gap-4 h-10 w-[170px] rounded-md j ${gradient===false?'':'x'}`}>
            <img src='/images/white-mail.png' alt="" className='w-6 h-6' />
            <p className='font-semibold text-white' >Contact me</p>
          </motion.button>
        </a>

      </motion.div> 

      <motion.div initial='hidden' whileInView='show' variants={container} viewport={{once:true}} className='flex gap-6' >
            <a href="https://github.com/wassim-mouloud" target='_blank'><motion.img onMouseEnter={()=>handleGithubenter()} onMouseLeave={()=>handleGithubleave()} variants={slideRight} viewport={{once:true}} src={githubHovered?'/images/github.png':'/images/white-github.png'} alt="" className='w-8 h-8 cursor-pointer lg:h-10 lg:w-10'  /></a>
            <a href="https://www.linkedin.com/feed/" target='_blank' ><motion.img onMouseEnter={()=>handleLinkedinenter()} onMouseLeave={()=>handleLinkedinleave()} variants={slideRight} viewport={{once:true}} src={linkedinHovered?'/images/linkedin.png':'/images/white-linkedin.png'} alt="" className='w-8 h-8 cursor-pointer lg:h-10 lg:w-10' /></a>
            <a href="https://twitter.com/WassimMouloud" target='_blank'><motion.img onMouseEnter={()=>handleTwitterenter()} onMouseLeave={()=>handleTwitterleave()} variants={slideRight} viewport={{once:true}} src={twitterHovered?"/images/twitter.png":"/images/white-twitter.png"} alt="" className='w-8 h-8 cursor-pointer lg:h-10 lg:w-10' /></a>
      </motion.div>
    </div> 
  )
}

export default Navbar