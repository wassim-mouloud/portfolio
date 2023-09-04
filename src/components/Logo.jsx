import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'
function Logo({url}) {

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, 
            transition:{
                duration:5
            }
    }
  }
  return (
    <motion.div variants={item} viewport={{once:true}} className='lg:hover:rotate-[360deg] transition-transform duration-[1500ms] h-[80px] w-[80px] overflow-y-hidden flex justify-center items-center' >
        <img src={url} alt="" className='' />
    </motion.div>
  )
}

export default Logo