import React, {useContext, useState } from 'react'
import LightIcon from '@mui/icons-material/LightMode';
import NightIcon from '@mui/icons-material/NightlightRound';
import {ThemeContext} from '@/components/Provider'

const Theme = ({click}:any) => {

  let state = useContext(ThemeContext) ;

  const [code,setcode] = useState(state);


  return (
    <ThemeContext.Provider value={state}>
      <div className={`${code ? 'bg-[#2c2c2c] text-white' : 'bg-[#fff3e0] text-[#e4b636]'} p-2 rounded-[100%] flex `} onClick={()=>{
      setcode(!code) ;
      console.log(code) ;
    }}>
    {code ? (
      <NightIcon onClick={click} />
    ) : (
      <LightIcon onClick={click}  />
    )}
  </div>
    </ThemeContext.Provider>

  )
}

export default Theme ;