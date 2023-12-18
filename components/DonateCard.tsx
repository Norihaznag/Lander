import Image from "next/image"

const DonateCard = ({AccNum,copycss,srcc}:any) => {
    copycss="text-center flex flex-col justify-center items-center w-[70%] md:w-[25vw] bg-white h-fit mt-2 p-3 " ;

  return (
    <div className={`bmce ${copycss}  md:self-start shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  rounded-xl text-black `}>

          <div className="imgfield flex p-2 justify-center   w-[90%] h-[5em] rounded-md  ">
            <Image src={srcc} alt= "somdtls" className="object-contain rounded-md w-full ml-1 "/>
          </div>
          <div className="rib flex flex-col w-fit min-h-fit  mt-1 items-center p-3 bg-[#e1e1e144] rounded-md ">
            <h1>01010110101010</h1>
          </div>
        </div>
  )
}

export default DonateCard