"use client"
import { BiLogoAws, BiLogoDocker, BiLogoGithub, BiLogoKubernetes, BiLogoNodejs, BiLogoPhp, BiLogoPython, BiLogoReact, BiLogoRedux, BiLogoSass, BiLogoSkype, BiLogoTailwindCss, BiLogoTypescript, BiLogoWordpress } from "react-icons/bi"
import { SiLaravel } from "react-icons/si"
import {motion} from 'framer-motion'
import useMediaQuery from '@mui/material/useMediaQuery'

const Technologies = () => {
    const isMobile = useMediaQuery('(max-width:750px)')

    return (
        <div className="p-4 border border-white max-h-[400px] overflow-hidden flex sm:grid gap-6">
            <motion.ul 
                initial={{y: 0, x: 0}}
                animate={{y: isMobile ? 0 : '-100%', x: isMobile ? '-100%' : 0}}
                transition={{repeat: Infinity, duration: 25, ease: 'linear'}}
                className="flex sm:flex-col items-center gap-6 justify-center"
            >
                <li className="text-white text-3xl">
                    <BiLogoTypescript />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoAws />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoReact />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoPhp />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoDocker />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoGithub />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoNodejs />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoRedux />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoWordpress />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoTailwindCss />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoSass />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoPython />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoKubernetes />
                </li>
                <li className="text-white text-3xl">
                    <SiLaravel />
                </li>
            </motion.ul>
            <motion.ul 
                initial={{y: 0, x: 0}}
                animate={{y: isMobile ? 0 : '-100%', x: isMobile ? '-100%' : 0}}
                transition={{repeat: Infinity, duration: 25, ease: 'linear'}}
                className="flex sm:flex-col items-center gap-6 justify-center"
            >
                <li className="text-white text-3xl">
                    <BiLogoTypescript />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoAws />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoReact />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoPhp />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoDocker />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoGithub />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoNodejs />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoRedux />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoWordpress />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoTailwindCss />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoSass />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoPython />
                </li>
                <li className="text-white text-3xl">
                    <BiLogoKubernetes />
                </li>
                <li className="text-white text-3xl">
                    <SiLaravel />
                </li>
            </motion.ul>
        </div>
    )
}

export default Technologies