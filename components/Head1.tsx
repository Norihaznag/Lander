import Link from "next/link";
import Button from "./Button";
const Head1 = () => {
  return (
    <div className="head1 w-[full] h-fit  flex  flex-col pt-2  border-b   mb-5 ">
    <div className="thead w-fit bg-red-400  h-[fit]
      flex justify-around flex-col items-center
    ">
      <h1 className='text-[2em] lg:text-[3em] leading-smooth text-center  self-center font-semibold text-white lg:w-[90%] justify-center '>
      Empowering Orphans, Enriching Lives: Building Hope, One Child at a Time,
      This is Us,Lander
      </h1>
      <div className="smalhed w-fit pl-2 pr-2  min-h-fit  flex h-[60vh] flex-col   lg:w-[90%] items-center ">
      <p className='text-white text-center font-sm'>
      With a profound mission to empower and uplift, the organization focuses on providing not just shelter, but also nurturing environments that foster growth, education, and emotional well-being. By embracing the ethos of building hope one child at a time, This is Us Lander stands as a beacon of compassion, working tirelessly to create a future where each orphaned child can discover their potential, overcome challenges, and contribute meaningfully to society. Through its unwavering dedication, the organization embodies the transformative power of love, support, and community, enriching the lives of these children and shaping a brighter tomorrow
      </p>
      <Button styler="w-[197px] mt-2 h-[57px] bg-[#0800FF] text-white rounded-2xl shadow-md shadow-[#0800FF] ">
      <Link href={`/About`} >
        Learn More
      </Link>
    </Button>
    </div>
    </div>
</div>
  )
}

export default Head1 ;