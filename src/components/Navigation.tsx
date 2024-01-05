"use client"

import { usePathname } from "next/navigation"
import {motion} from 'framer-motion'
import { useEffect, useState } from "react"
import Link from "next/link"

const Navigation = () => {
    const location = usePathname()
    const [dotY, setDotY] = useState<string|number>(2.5)

    useEffect(() => {
        console.log(location)
        switch(location) {
            case "/":
                setDotY(2.5)
                break
            case "/about":
                setDotY(34)
                break
            case "/projects":
                setDotY(64)
                break
            default:
                setDotY(2.5)
        }
    }, [location])

    return (
        <ul className="flex flex-col gap-4 relative items-center">
            <motion.li 
                animate={{y: dotY}}
                className="bg-white rounded-full w-[10px] h-[10px] absolute"
            >
            </motion.li>
            <li 
                className="border border-white rounded-full w-[15px] h-[15px] relative"
            >
                <Link href="/" className="absolute w-full h-full left-0 top-0"/>
            </li>
            <li 
                className="border border-white rounded-full w-[15px] h-[15px] relative"
            >
                <Link href="/about" className="absolute w-full h-full left-0 top-0"/>
            </li>
            <li 
                className="border border-white rounded-full w-[15px] h-[15px] relative"
            >
                <Link href="/projects" className="absolute w-full h-full left-0 top-0"/>
            </li>
        </ul>
    )
}

export default Navigation