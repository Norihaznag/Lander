import React, { useContext, useState } from 'react'
import Provider from '@/components/Provider'
const Tester = () => {
  const [mode,setmode] = useState('dark')

  return (
    <div className="w-full h-[100em]" >
      <Provider/>
    </div>
  )
}

export default Tester