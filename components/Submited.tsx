'use client' ;
import { createContext, createRef, useContext, useEffect, useRef, useState } from "react";
import Pchild from "./Pchild";
import SendBtn from "./SendBtn";
import CallIcon from '@mui/icons-material/Call'
import Email from '@mui/icons-material/AlternateEmail'
import PersonIcon from '@mui/icons-material/Person';
import Msg from '@mui/icons-material/LocalPostOffice';
import Loading from "./Loading";


const Submited = () => {
   
    const [bSubmited,SetbSubmite] = useState(false) ;

    if(bSubmited == true){

        setTimeout(()=>{
            SetSubmite(true)
        },2000)
    }

    // if(bSubmited == true){
    //     setTimeout(()=>{
    //         SetSubmite(false)
    //     },2000)
    // }

    const [Submited,SetSubmite] = useState(false) ;

    if (Submited == false){

        return (
            <div className=' min-w-fit w-[fit]  h-[30em]  flex flex-col items-center p-4 gap-2 justify-around  '>

                
                <Pchild          type="text"
                   placeholder="Write Your Full Name">
                     <PersonIcon fontSize='large' className='absolute m-2'/>
                     </Pchild>

                     <Pchild type="phone" 
                     placeholder="Phone">
                     <CallIcon fontSize="large"
                     className='absolute m-2'/>
                     </Pchild>

                     <Pchild type="email" 
                     placeholder="Email">
                     <Email fontSize="large"
                     className='absolute m-2'/>
                     </Pchild>

                     <Pchild 
                  
                  isTextArea = {true}
                   placeholder="Write Your Full Name">
                     <Msg fontSize='large' className='absolute m-2'/>
                     </Pchild>

                     {/* <Button type="submit"
                     onClick={()=> SetSubmite(true)}
                     variant="outlined">Click Me</Button> */}

                     <Loading  onClick={()=>{
                        SetbSubmite(true)
                     }}
                     loading={bSubmited}/>
           
        </div>
        )
        
       
    }else if(Submited == true) {
//         setTimeout(()=>{
// SetSubmite(false) ;
//         },3000)
        return (
                
            <div className="w-[24em] h-[1/2] rounded-lg flex flex-col items-center p-7 gap-2 justify-around bg-[#c2ffda]">
                <h1 className="text-[rgb(6,68,42)] text-[1.2em] text-center">Message Has Been Submitted Successfully !</h1>
            </div>
          )

        

        
       
    }
 
}

export default Submited