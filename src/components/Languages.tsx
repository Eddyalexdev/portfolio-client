"use client"
import {motion} from 'framer-motion'
import Image from 'next/image'

const Languages = ({data}: any) => {
    return (
        <ul className="flex items-center flex-wrap gap-2 xl:gap-4 mb-4">
            {
                data.languages.map((language: any, i: number) => (
                    <motion.li initial={{scale: 0}} animate={{scale: 1}} transition={{delay: (i * 10) / 100}} key={language.slug} className="flex flex-col items-center p-3 gap-2 transition-all">
                        <Image src={language.image} alt="" width={25} height={25} className='object-contain' />
                        <span className="text-white text-xs">{language.slug}</span>
                    </motion.li>
                ))
            }
        </ul>
    )
}

export default Languages