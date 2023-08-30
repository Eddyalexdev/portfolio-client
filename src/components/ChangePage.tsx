"use client"
import { useRouter } from "next/navigation"

interface Props {
    bottomTo?: string,
    topTo?: string,
    className: string,
    children: React.ReactNode
}

const ChangePage = ({bottomTo, topTo, className, children}: Props) => {
    const router = useRouter()
    const handleChangePage = (e: any) => {
        if(e.deltaY > 0) {
            if(bottomTo) router.push(bottomTo)
        } else {
            if(topTo) router.push(topTo)
        }
    }

    return (
        <section onWheel={handleChangePage} className={className}>
            {children}
        </section>
    )
}

export default ChangePage