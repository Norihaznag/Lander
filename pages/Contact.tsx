import '../app/globals.css'
import Image from 'next/image'
import deal from '@/public/images/deal.svg'
import Submited from '@/components/Submited'

const Contact = () => {
  return (
    <div className=" min-h-fit w-[100dwh]  ">
      
      <div className="content w-full min-h-fit h-fit  flex flex-col md:flex-row items-center gap-3 justify-around ">

        <div className="pt-3 md:w-[50%]  h-fit flex flex-col justify-between items-center">
        <h1 className='text-[3em] '>Contact Us</h1>
        <Image src={deal} alt='s' className='w-[22em]  md:w-[30em] h-fit object-fit'/>
        </div>
       
       <form action="" className=' min-w-fit w-[fit]  h-[30em]  flex flex-col items-center p-4 gap-2 justify-around '>

        <Submited/>


</form>

     
      </div>
  </div>
  )
}

export default Contact