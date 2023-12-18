import '../app/globals.css'
import bmce from '@/public/images/bmce.png'
import cih from '@/public/images/cih.svg'
import DonateCard from "@/components/DonateCard"
import Link from "next/link";
import Image from 'next/image'
import Donater from '@/public/images/Donate.svg'
function Donate({copycss}:any) {

  
  return (
    <div className=" w-full h-fit flex flex-col">

     
      <div className="donate w-full h-fit  flex flex-col items-center justify-around
      ">
        
        <div className="Donate  
        text-center md:w-[80%] h-fit mt-2 p-3 flex flex-col justify-center gap-3 rounded-md w-[90%] md:flex-row">

          <Image src={Donater} className='w-[50rem] h-full   md:top-10 md:mr-9 ' alt='donate' />

          <div className="text  md:w-[90%]">
       

<h1 className='text-[2em]'>Why Donate?</h1>
<p>
Your donation can be the key to unlocking a world of possibilities for children in our community. By supporting us, you re investing in their education, health, and overall well-being. Your generosity enables us to:

Provide nutritious meals to hungry children.
Offer educational resources and school supplies.
Ensure access to essential healthcare services.
Create safe and nurturing spaces for children to learn and play.

</p>

<h1 className='text-[2em]'>How You Can Help</h1>
<p>
One-Time Donation: Make a one-time contribution today and make an immediate impact on a child s life.

Monthly Giving: Join our monthly giving program to provide ongoing support for children in need.

Spread the Word: Share our cause on social media and let your friends and family know about [Organization Name]. Together, we can create a ripple effect of positive change</p>
        </div>

          </div>
         
        

        <div className="w-full h-fit flex flex-col gap-2 p-3 md:p-5 md:gap-4 items-center justify-center md:flex-row  ">

        <DonateCard srcc={bmce} ></DonateCard>
        <DonateCard srcc={cih} ></DonateCard>

        </div>

        <Link href={`/Contact`} className="hover:underline w-fit  font-bold mt-5 mb-4">
          Need Help ? Contact Us
        </Link>
        
      </div>
    </div>
  )
}

export default Donate