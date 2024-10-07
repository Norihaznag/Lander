'use client'
import Link from "next/link"
import React, { useState } from "react"
import Image from "next/image"
import berger from '../public/icons/berger.svg'
import logo from '../public/icons/logo.svg'
import close from '../public/icons/close.svg'
import Theme from '@/components/Theme'

import { ThemeContext } from '@/components/Provider'

import { useContext } from 'react'

interface MyComponentProps {
  Clicked: any
}

const Nav: React.FC<MyComponentProps> = ({ Clicked }) => {

  let links = ['Donate', 'Contact', 'About']
  let state = useContext(ThemeContext);
  const [isOpened, SetOpened] = useState(state)

  function checkmeu() {
    SetOpened(!isOpened);
  }
  return (

    <ThemeContext.Provider value={isOpened}>

      <div className="w-screen h-[50px]   flex items-center justify-right   sticky top-0 md:px-5  overflow-visible backdrop-blur-sm backdrop-saturate-150 brightness-95" >

        <div className={`Menu absolute bg-[#fff] w-[100%] z-20 h-max top-0 lg:hidden  md:hidden ${isOpened ? 'hidden ' : 'flex flex-col'} `}>

          <div className="closing w-full h-max overflow-hidden  flex justify-end   ">

            <div onClick={checkmeu} className="w-[50px] h-[50px] flex justify-center mr-2 mt-2 align-middle  cursor-pointer absolute overflow-hidden  ">

              <Image src={close} alt="close" className="z-30" />

            </div>
          </div>

          <div className="links ">
            <Link className={` w-full p-5  z-10 flex text-xl font-medium  text-white border-b  bg-[#151515]
          `} href={`/`}>
              Home </Link>
            {links.map((link, index) =>

              <Link className=" text-xl font-medium w-full p-5 bg-[#151515] text-white border-b border-t-red-400 flex" href={`/${link}`} key={index}>

                {link}

              </Link>
            )}
          </div>

        </div>

        <div className="log w-fit h-full  ">
          <Link href={`/`}  >
            <Image src={logo} alt="logo" className="w-fit h-full p-2" />
          </Link>
        </div>

        <div className="lg w-full max-[750px]:hidden md:flex  gap-4  items-center h-full self-center pl-4 ">

          <Link className="focus:text-green-600" href={`/`}>
            Home
          </Link>
          {links.map((link: any, index: any) =>
            <Link href={`/${link}`} className="focus:text-green-600" key={index}>{link}</Link>
          )}

        </div>

        <Theme click={Clicked} />

        <div onClick={checkmeu} className=" w-max h-full lg:hidden md:hidden
         ml-auto
         ">
          <Image src={berger} className="p-1 h-full" alt="berger" />
        </div>

      </div>
    </ThemeContext.Provider>

  )
}

export default Nav
