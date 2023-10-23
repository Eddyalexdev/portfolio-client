"use client"

import { usePathname } from "next/navigation"
import {motion} from 'framer-motion'

const Navigation = () => {
    const location = usePathname()
    return (
        <ul className="flex flex-col gap-4">
            <motion.li 
                initial={{}}
                animate={{}}
                className="border border-white rounded-full w-[15px] h-[15px]"
            ></motion.li>
        </ul>
    )
}

export default Navigation