import Link from "next/link"
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai"

const About = () => {
  return (
    <>
      <section className="w-full h-screen grid place-items-center relative z-10">
        <div className="grid grid-cols-2">
          <div className="border border-white p-4 col-span-2">
            <h1 className="text-white text-2xl mb-2">About Me!</h1>
            <p className="text-white max-w-[550px]">
              Nice to meet you, my name is Eddy and I am a web developer with over 4 years of experience. I am very passionate about the world of software development, and thanks to that passion, I have been able to make significant progress in the field. Over these years, I have learned a lot, mostly through projects as a freelancer.
            </p>
          </div>
          <div className="border border-white col-span-2 p-4 -mt-[1px]">
            <h2 className="text-white uppercase">Contact With Me!</h2>
            <ul>
              <li className="text-white"><Link target="_blank" href="mailto:eddyalex.dev@gmail.com" className="flex items-center gap-2 underline"><AiOutlineMail /> Eddyalex.dev@gmail.com</Link></li>
              <li className="text-white"><Link target="_blank" href="https://api.whatsapp.com/send?phone=59179536443" className="flex items-center gap-2 underline"><AiOutlineWhatsApp /> +591 79536443</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
