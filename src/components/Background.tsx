"use client"
import { motion } from 'framer-motion'

const Background = () => {
    return ( 
        <motion.div initial={{opacity: 0}} animate={{opacity: .9, background: '#000000'}} className={`absolute -inset-0.5`}></motion.div>
    )
}

export default Background