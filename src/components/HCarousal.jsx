"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Link from "next/link";
export default function HCarousel(data) {
  
  
  return (
    <div className="w-full flex md:mt-4 md:ml-4 ml-1 mr-1 flex-col md:flex-row">
       <div className="lg:h-[450px] md:h-[375px] h-[300px] w-full md:w-2/3 ">
       <Carousel showThumbs={false} showArrows={true} showStatus={false}>
        {data.data.map((item,index)=>(
          <div key={index}>
            <Link href={`/shopname/${item.slug}`}>
            <div className=" " >
           <img src={item.imageUrl} className="md:h-[375px] lg:h-[450px] w-full object-fill object-center" />
           
          </div>
            </Link>
            
          </div>
           
        ))}
    

</Carousel>
    </div>
    <div className=" mb-5 w-full lg:h-[450px] md:h-[375px] md:mt-0 md:mb-0 md:ml-2 flex flex-col md:flex-col   md:w-1/3 md:space-y-3">
      {data.side.map((item,index)=>(
       
        <Link key={index} href={`/brand/${item.name}`}>
      <div className="md:w-full h-52  md:h-52">
        <img src="/bike.png" alt="" className="w-full h-full"/>
      </div>
      </Link>
      ))}
      
      
      <div className="w-full h-52 md:h-52 ">
        <img src="/alfa.png" alt="" className="w-full h-full" />
      </div>
      
    </div>
    </div>
   
   
  )
}
