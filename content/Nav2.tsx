'use client';
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import berger from '../public/icons/berger.svg'
import lander from '../public/icons/lander.svg'
import close from '../public/icons/close.svg'
import Home from "@/pages/index"
import { list } from "postcss";
interface MyComponentProps {
  items: string[];
}

const Nav: React.FC<MyComponentProps> = () => {

  let links = ['Donate','Contact','About']


  const [isOpened,SetOpened] = useState(false);

  function checkmeu(){
    SetOpened(!isOpened);
  }
  return (
    <div className="w-screen h-[55px]   flex items-center  justify-between  sticky top-0  overflow-visible backdrop-blur-sm backdrop-saturate-150 brightness-95">
      
      <div className={`Menu absolute bg-[#ffff] w-[100%] z-10 h-max top-0 lg:hidden md:hidden ${isOpened ? 'flex flex-col' : 'hidden'} `}>

        <div className="closing w-full h-max overflow-hidden bg-black  flex justify-end z-[0]  ">
          <div onClick={checkmeu} className="w-[50px] h-[50px] flex justify-center mr-2 mt-2 align-middle  cursor-pointer z-20 absolute overflow-hidden">
           <Image src={close} alt="close" className="z-30"/>
          </div>
        </div>

      <ul className="flex-row flex-wrap 
        
        "
        >
          <li className="p-5 z-10  hover:bg-[#1f1f1f] hover:text-white"><Link className="  w-full h-[10] z-10 flex text-xl font-medium
          
          " href={`/`}>
          Home            </Link></li>
            {links.map((link,index) =>
            <li className="w-full p-5 hover:bg-[#1f1f1f] hover:text-white " key={index}>
<Link className=" text-xl font-medium w-full h-[10] z-10 flex" href={`/${link}`} key={index}>{link}</Link>

            </li>
            )}
        </ul>
      </div>

      <div className="logo w-[100px] h-full p-2 flex place-content-center place-items-center">
        <Link href={`/`} className="text-lg font-bold">
          <Image src={lander} alt="lander logo"/>
        </Link>
        </div>
        <ul className="flex-row flex-wrap 
       w-[100%] space-x-3 hidden lg:flex md:flex
        "
        >
          <li className="p-2"><Link className="hover:text-[#bb229c] text-[#A8A8A8]" href={`/`}>
          Home
            </Link></li>
            {links.map((link:any,index:any) =>
            <li className="p-2 text-[#A8A8A8]  hover:text-[#bb229c] " key={index}>
<Link href={`/${link}`} key={index}>{link}</Link>

            </li>
            )}
        </ul>
       
        <div onClick={checkmeu} className="logo w-max h-full lg:hidden md:hidden">
        <Image src={berger} className="w-[90%] p-1 h-full" alt="berger"/>
      </div>
    </div>
  )
}

export default Nav
