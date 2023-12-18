import '../app/globals.css'
import imger from '@/public/images/imger.jpg'
import imger2 from '@/public/images/imger2.jpg'
import Member from "@/components/Member"
import pro1 from '@/public/images/pro1.jpg'
import pro2 from '@/public/images/pro2.jpg'
import pro3 from '@/public/images/pro3.jpg'
import pro4 from '@/public/images/pro4.jpg'
import Section from "@/components/Section"



const About = () => {


  return (

    <div className="w-full min-h-fit flex flex-col justify-center items-center  ">
      
      <div className={`body flex flex-col items-center justify-center w-[90%] h-full   select-none`}>

      <h1 className="About text-center ">About Us</h1>

        <Section title="The Foundation" cs="text-center  " imgsrc={imger} >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab, vero magnam veritatis commodi optio velit nesciunt repellat in recusandae fuga natus. Voluptate ab, sunt nesciunt facere pariatur asperiores qui?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit consequuntur distinctio illum commodi optio nihil eum natus officiis, doloremque architecto temporibus, voluptatem vero repellat voluptatum odit sapiente, dignissimos expedita!
   </p>
        </Section>

        <Section title="Why Are We Doing This" cscild="md:order-last" imgsrc={imger2}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab, vero magnam veritatis commodi optio velit nesciunt repellat in recusandae fuga natus. Voluptate ab, sunt nesciunt facere pariatur asperiores qui?
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit consequuntur distinctio illum commodi optio nihil eum natus officiis, doloremque architecto temporibus, voluptatem vero repellat voluptatum odit sapiente, dignissimos expedita!
   </p>
        </Section>
        <div className="w-full h-full   flex flex-col   ">
          <h1 id='horror' className="About text-center ">Our Members</h1>
          <div className="members w-full h-fit  flex flex-col md:gap-4 md:justify-center items-center md:flex-row p-3 ">

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