import Nav from "@/components/Nav"
import '../app/globals.css'
import Image from "next/image"
import imger from '@/public/images/imger.jpg'
import Footer from "@/components/Footer"
import imger2 from '@/public/images/imger2.jpg'
import Member from "@/components/Member"
import pro1 from '@/public/images/pro1.jpg'
import pro2 from '@/public/images/pro2.jpg'
import pro3 from '@/public/images/pro3.jpg'
import pro4 from '@/public/images/pro4.jpg'
import Section from "@/components/Section"



const About = () => {


  return (

    <div className="w-full min-h-fit h-full ">
      
      <h1 className="About text-center p-2   ">About Us</h1>
      <div className={`body flex flex-col w-full h-full select-none`}>
        <Section title="The Foundation" cs="text-center  " imgsrc={imger} >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab, vero magnam veritatis commodi optio velit nesciunt repellat in recusandae fuga natus. Voluptate ab, sunt nesciunt facere pariatur asperiores qui?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit consequuntur distinctio illum commodi optio nihil eum natus officiis, doloremque architecto temporibus, voluptatem vero repellat voluptatum odit sapiente, dignissimos expedita!
   </p>
        </Section>

        <Section title="Why Are We Doing This" cscild="md:order-last" imgsrc={imger2} cs="">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab, vero magnam veritatis commodi optio velit nesciunt repellat in recusandae fuga natus. Voluptate ab, sunt nesciunt facere pariatur asperiores qui?
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit consequuntur distinctio illum commodi optio nihil eum natus officiis, doloremque architecto temporibus, voluptatem vero repellat voluptatum odit sapiente, dignissimos expedita!
   </p>
        </Section>
        <div className="w-full h-full  p-4  md:h-[30em] flex flex-col justify-around items-center  ">
          <h1 className="About text-center ">Our Members</h1>
          <div className="members md:grid grid-cols-4 md:h-[50%]  md:grid-rows-1  ">

           <Member name="John Smith" photo={pro1} role="Autor"/>

           <Member name="David Bickham" photo={pro2} role="Writer"/>

           <Member name="Sara Thankredy" photo={pro3} role="Sponsor"/>

           <Member name="Alexandra Lionel" photo={pro4} role="Just A Friend"/>
          </div>
        </div>

      </div>
     
    </div>
  )
}

export default About