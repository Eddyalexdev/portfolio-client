"use client"
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {ssr: false})

const Cursor = () => {
  return (
    <AnimatedCursor 
      color='192, 192, 192'
      trailingSpeed={10}
    />
  )
}

export default Cursor
