import type { AppProps } from 'next/app'
import '../app/globals.css'
import {ThemeContext} from '@/components/Provider'
import { createContext, useContext, useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function MyApp({ Component, pageProps }: AppProps) {
  let [isDark,SetMode] = useState(false)
  return <div className="">
    <ThemeContext.Provider value={isDark}>
    <div className={`${isDark ? 'bg-black text-[#c0c3b2]' : ''}`}>
      <Nav Clicked={()=>{
        SetMode(!isDark)
      }}/>
    <Component {...pageProps} />
    <Footer/>
    </div>
    </ThemeContext.Provider>
  </div> 
}