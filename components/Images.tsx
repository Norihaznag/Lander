'use client'
import Image from "next/image"
// done by Noureddine Azinag
const Images = ({sources}: any) => {
  return (
   
        <div className="Place w-[300px]  min-w-[300px]  border h-[80%] rounded-xl text-white flex flex-col justify-center items-center snap-center overflow-hidden shadow-md ">
            <Image src={sources} alt={`${sources}`} className="object-cover w-full h-full"
            
            />
        </div>
    
  )
}

export default Images