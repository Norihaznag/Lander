import Image from 'next/image'
import imger from '@/public/images/imger.jpg'


const Member = ({name = 'John Smith',role = "Autor",photo = imger}) => {
  return (
    <div className='  h-[20dvh]   flex md:flex-col md:w-[16em] m-5 items-center'>

      <div className="photo  h-full  w-full ">
        <Image src={photo} className=' object-cover h-full  ' alt='img'/>
      </div>
      <div className="text w-full text-black bg-white flex flex-col text-center break-words p-1 items-center justify-center h-full md:p-4 ">
        <h1 className='text-xl'>{name}</h1>
        <h2>{role}</h2>
      </div>
    </div>
  )
}

export default Member