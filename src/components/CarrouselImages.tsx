"use client"

import { Image } from '@/components'
import Img from 'next/image'
import {animate, motion, useAnimationControls, useMotionTemplate, useMotionValue, useSpring, useTime, useTransform, useWillChange} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { AiFillFileImage } from 'react-icons/ai'

interface Props {
    data: string[],
    loading: boolean
}

const CarrouselImages = ({data, loading}: Props) => {
    const [fullImage, setFullImage] = useState('')
    const imagesRef = useRef(null) as any
    const [isActivated, setIsActivated] = useState(false)
    const [fullImageCharged ,setFullImageCharged] = useState(false)

    const controls = useAnimationControls()

    const handleMouseHover = (e: any) => {
        if (e.clientX > 800) {
            setIsActivated(true)
        } else if(e.clientX < 700){
            setIsActivated(false)
        }
    }

    useEffect(() => {
        if(isActivated) {
            controls.start({x: '-95%', transition: {ease: 'linear', duration: 3}})
        } else {
            controls.start({x: '0%', transition: {ease: 'linear', duration: 2}})
        }
    }, [isActivated])

    useEffect(() => {
        if(!loading) {
            setFullImage(data[0])
        }
    }, [loading])

    return (
        <>
            <div className='col-span-4 lg:h-[500px] overflow-auto border-b border-white p-5'>
                {
                    fullImageCharged &&
                    <motion.div 
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}} 
                        transition={{repeat: Infinity, duration: 1, repeatType: "reverse"}} 
                        className="bg-gray-100 w-full h-full absolute lef-0 top-0 z-20 text-gray-400 text-3xl grid place-items-center"
                    >
                        <AiFillFileImage />
                    </motion.div>
                }

                <img className='w-full object-contain' src={fullImage} alt="" loading="lazy" />
            </div>

            <div className="w-full relative col-span-6 overflow-hidden max-xl:hidden">
                <motion.div onMouseEnter={() => controls.start({x: isActivated ? '-95%' : '0%'})} onMouseLeave={() => controls.stop()} animate={controls} transition={{duration: 8, type: 'spring'}} onMouseMove={handleMouseHover}  ref={imagesRef} className="flex h-[250px] w-full px-2">
                    {
                        loading ?
                        <span>Loading...</span>
                        :
                        data.map((image: string, i: number) => 
                            <Image key={image} image={image} setFullImage={setFullImage} fullImage={fullImage}/>
                        )
                    }
                </motion.div>
            </div>
        </>

    )
}

export default CarrouselImages
