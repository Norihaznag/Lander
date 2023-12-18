import Image from 'next/image'
import imger from '@/public/images/imger.jpg'


const Member = ({name = 'John Smith',role = "Autor",photo = imger}) => {
  return (
    <div className=' h-fit   flex md:flex-col w-full items-center mt-3  rounded-lg  '>

      
        <Image src={photo} className='md:w-full rounded-lg h-[10em] md:h-full w-40 ' alt='img'/>
    
      <div className="text w-full  flex flex-col text-center break-words p-1 items-center justify-center h-full md:p-4 ">
        <h1 className='text-xl'>{name}</h1>
        <h2>{role}</h2>
      </div>
    </div>
  )
}

export default Member