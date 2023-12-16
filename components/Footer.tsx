import Link from "next/link"
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';

import Twitter from '@mui/icons-material/Twitter';

let Dive = ({children,styl}:any)=> 
<div className={`Dive w-[90%] h-full  rounded-sm md:w-full  p-3 ${styl}`}>
    {children}
</div>;


const Footer = () => {
  return (
    <div className="Footer w-full max-h-fit  flex flex-col place-items-center capitalize  bg-[#001d12] text-[#e7fff5] mt-2 gap-2">
        <div className="logoplace items-center  w-full flex h-fit justify-center  mb-2 bg-[#35B680]">
        <h1 className="text-[2em]
        p-1  
        place-self-start text-white   ">Zans</h1><span className="text-sm text-white">by Noureddine Azinag</span>
        </div>

     <div className="  w-full max-h-fit h-[90%]  flex flex-col md:flex-row  gap-2 justify-center lg:justify-between items-center md:items-start pl-3 pr-3 pt-3">

        <Dive>
        <h1 className="text-xl font-bold ">Contact us</h1>
   <ul className="flex flex-col">
       <li>Phone: +212688616579</li>
       <li>Email: nordin0aznag@hotmail.fr</li>
       <li>Adress: random adress</li>

   </ul>
        </Dive>

        <Dive>
        <h1 className="text-xl font-bold ">Quick Links</h1>
   <ul className="flex flex-col">
       <Link href={'/'}>Home</Link>
       <Link href={'/Donate'}>Donate</Link>
       <Link href={'/About'}>About</Link>
       <Link href={'/Contact'}>Contact</Link>
   </ul>
        </Dive>

        <Dive styl="text-xl">
            <h1>Socail Links</h1>
            <div className="sociallinks h-fit w-fit min-w-fit flex ">
                <Link href="/">
                    <Twitter fontSize="large"/>
                </Link>
                <Link href="/">
                <Facebook fontSize="large"/>
                </Link>
                <Link href="/">
                <Instagram fontSize="large"/>
                </Link>
            </div>
        </Dive>
        <Dive>
        <h1 className="text-xl font-bold ">Join Our News lister</h1>
        <h3>Stay updated on new releases and features, guides, and case studies.</h3>
       <form action="" className="flex flex-col mt-3 " method="post">
        <input className="
          p-2 rounded-md text-black " type="email" name="" id="" placeholder="Write Your Email" />
        <button className=" bg-white text-[#5c5c5c] hover:text-[#000] min-w-fit w-max p-1 mt-1 rounded h-fit " type="submit">Subscribe</button>
       </form>
        </Dive>

        <Dive>
        <h1 className="text-xl font-bold ">About The Developer</h1>
        <p>This Website Was Developed By</p>
        <Link className="font-bold hover:underline" href={'/'}>Noureddine Azinag</Link>
        <div className="social w-full max-h-fit flex items-center">
            <Link target="_blank" href={'https://github.com/Norihaznag'}>
                <GitHub fontSize="large"/>
            </Link>
            <Link target="_blank" href={`https://www.linkedin.com/in/noureddine-azinag-aa0422298/`}>
                <LinkedIn fontSize="large"/>
            </Link>
        </div>
        </Dive>


     </div>
     <div className="rights mt-5 mb-4 w-full h-fit text-center ">
        <p className=" capitalize">All Rights Reserved 2023 </p>
     </div>    
    </div>
  )
}

export default Footer