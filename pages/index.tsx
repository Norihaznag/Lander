
import '../app/globals.css'
import Link from 'next/link'
import Images from '@/components/Images'

import ph1 from '/public/images/ph1.jpg'
import ph2 from '/public/images/ph2.jpg'
import ph3 from '/public/images/ph3.jpg'
import ph4 from '/public/images/ph4.jpg'
import ph5 from '/public/images/ph5.jpg'
import ph7 from '/public/images/ph7.jpg'

const Home = () => {


  return (
    <div className="w-screen min-h-fit  flex flex-col items-center ">


      <div className="main w-full  min-h-[fit]  flex flex-col  
place-items-center pt-6 pb-4  place-content-end md:h-[80vh]">

 <div className="w-[90%] h-[100%]    md:w-[80%] flex flex-col items-center justify-center text-center  px-4">
   
<h1 className='font-bold md:text-5xl  text-4xl 
pb-4'>
 Empowering Orphans, Enriching Lives: Building Hope, One Child at a Time
 </h1>

   <p className='pb-5 '>
   With a profound mission to empower and uplift, the organization focuses on providing not just shelter, but also nurturing environments that foster growth, education, and emotional well-being. By embracing the ethos of building hope one child at a time, This is Us Lander stands as a beacon of compassion, working tirelessly to create a future where each orphaned child can discover their potential, overcome challenges, and contribute meaningfully to society.
   </p>

   <Link href={'/About'} className=' text-xl  bg-[#012920]
   min-w-[10rem]
   h-[2em] flex  rounded-xl items-center justify-center  text-white animate-fade-left '>
   Learn More
   </Link>
 </div>

</div>

<div className="Collaborations w-full min-h-fit  text-center flex flex-col items-center p-4 ">
  <h1 className='font-semibold text-[1.3em]  w-full'>Our Collaborations</h1>

  <div id='reels'  className="reels gap-3  w-full  min-h-fit flex flex-row justify-between overflow-scroll items-center h-[70vh] snap-x ">

  <Images sources={ph1} />
  <Images sources={ph2} />
  <Images sources={ph3} />
  <Images sources={ph4} />
  <Images sources={ph5} />
  <Images sources={ph7} />

  </div>
 </div>

<div className="our-Mission w-[80%]  
pt-3 text-left justify-center
min-h-full flex flex-col p-2 md:p-3 md:mb-3 gap-4 md:w-[60%]   md:h-[80vh] ">
 <div className="self-center items-center ">
 <h1 className='font-semibold   pt-2 '>Our Mission</h1>
 <p className='p-2'>
 The Lander Assocaition is dedicated to providing love, care, and a nurturing environment for orphaned children, ensuring they have the opportunity to grow, learn, and thrive. Our mission is to break the cycle of hardship by offering comprehensive support, including education, healthcare, and emotional well-being, empowering each child to reach their full potential. Through compassion, community engagement, and sustainable programs, we strive to create a brighter future for orphans, helping them build the foundation for a life of dignity and fulfillment
 </p>
 <h1 className='font-semibold pt-2 '>A brief About Us</h1>
 <p>
 The Lander is dedicated to providing love, care, and a nurturing environment for orphaned children, ensuring they have the opportunity to grow, learn, and thrive. Our mission is to break the cycle of hardship by offering comprehensive support, including education.
 </p>
 </div>
</div>

 
    </div>
  )
}

export default Home
