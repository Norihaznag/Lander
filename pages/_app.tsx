import type { AppProps } from 'next/app'
import '../app/globals.css'
import { createContext, useContext, useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Head from 'next/head'
const Theme = createContext({});
interface Contexte{
  isDark : boolean,
}
export default function MyApp({ Component, pageProps }: AppProps) {
  let [isDark,SetMode] = useState(false)
  function changeState(){
    ()=>{
      SetMode(!isDark)
    }
  }
  
  return <div className="">
    
    <Theme.Provider value={{isDark,SetMode}}>
    <div className={`${isDark ? 'bg-black text-[#c0c3b2]' : ''} `} onClick={changeState}>
      <Nav Clicked={()=>{
              SetMode(!isDark) ;
              console.log("the function is working you have to see somthing else")
      }}/>
          

    <Component {...pageProps} />
    <Footer/>
    </div>
    </Theme.Provider>
  </div> 
}