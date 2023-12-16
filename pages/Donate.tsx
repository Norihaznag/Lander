import '../app/globals.css'
import bmce from '@/public/images/bmce.png'
import cih from '@/public/images/cih.svg'
import DonateCard from "@/components/DonateCard"

import Link from "next/link";

function Donate({copycss}:any) {

  
  return (
    <div className=" w-full h-fit flex flex-col">

     
      <h1 id="Donate" className="text-center p-2">Donate</h1>
      <div className="donate w-full h-fit  flex flex-col items-center 
      ">
        <div className="Donate Text  
        text-center w-[90%] h-fit mt-2 p-3  pt-3">

          <h1 className="text-[1.2em]">Bank Account</h1>

          <p>Your contributions are welcome at the association&#39;s  headquarters or by direct transfer to one of the following current accounts:</p>

        </div>

        

        <div className="w-full h-fit flex flex-col gap-2 p-3 md:p-5 md:gap-4 items-center md:flex-row  ">

        <DonateCard srcc={bmce} ></DonateCard>
        <DonateCard srcc={cih} ></DonateCard>
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