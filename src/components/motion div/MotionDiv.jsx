import React from 'react'
import { motion} from 'framer-motion'

const MotionDiv = ({time}) => {
  return (
    <motion.div 
      whileInView={{x:[-100,0], opacity:[0,1]}}
      transition={{ duration: 2}}>
      
    </motion.div>
  )
}

export default MotionDiv