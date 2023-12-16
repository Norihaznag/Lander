import Image from 'next/image'


const Section = ({title,cs,cscild,imgsrc,children}:any)=> 

<div className={`grid grid-cols-1 grid-rows-2 p-4 w-full h-full md:grid-cols-2 md:grid-rows-1 items-center ${cs} md:h-[35rem]`}>

<div className={ ` w-full  h-[90%]  md:w-60% md:h-[60%] justify-self-center  ${cscild} `}>

 <Image src={imgsrc} alt="img" className="max-w-full h-full object-cover rounded-xl 
 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
 " />
</div>

<div className={`foundationtext pb-2 h-full w-[90%] flex flex-col justify-center justify-self-center 
text-center
`}>

<div className="text">
<h1 className="text-[2em] p-1">{title}</h1>
{children}
</div>

</div>


</div>

export default Section
