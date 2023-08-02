import Model3D from "@/components/Model3D";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-r col-span-3 pt-4">
      <h1 className="text-white text-3xl uppercase font-mono text-center">
        Eddy Alex Chambi Llanco 
      </h1>
      <div className="w-full h-[200px]">
        <Model3D />
      </div>
      <nav className="border-b px-5 flex items-center gap-5 pb-2">
        <Link className="text-white font-medium" href="/">Info</Link>
        <Link className="text-white font-medium" href="/projects">Projects</Link>
        <Link className="text-white font-medium" href="">Contact</Link>
      </nav>
    </header>
  )
}

export default Header
