import Link from "next/link";
import {AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'

export default function Home() {
  return (
    <>
      <section className="w-full h-screen grid place-items-center">
        <div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-white text-3xl">Eddy Alex Chambi Llanco</h1>
          <h2 className="text-white text-xl mb-2">Full Stack Developer</h2>
          <ul className="flex gap-2 items-center justify-center -ml-5">
            <li className="text-white text-2xl"><Link href="https://github.com/Eddyalexdev" target="_blank"><AiOutlineGithub /></Link></li>
            <li className="text-white text-2xl"><Link href="https://www.linkedin.com/in/eddy-chambi-6111901a6/" target="_blank"><AiOutlineLinkedin /></Link></li>
            <li className="text-white text-2xl"><Link href="https://github.com/Eddyalexdev" target="_blank"><AiOutlineInstagram /></Link></li>
          </ul>
        </div>
      </section>
    </>
  )
}
