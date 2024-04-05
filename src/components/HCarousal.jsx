"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function HCarousel() {
  return (
    <div className="w-full flex mt-4 md:ml-4 ml-1 mr-1 flex-col md:flex-row">
       <div className="lg:h-[450px] md:h-[375px] h-[300px] w-full md:w-2/3 ">
       <Carousel showThumbs={false} showArrows={true} showStatus={false}>
    <div className=" ">
        <img src="/vivo.jpg" className="md:h-[375px] lg:h-[450px] w-full object-fill object-center" />
    </div>
    <div>
        <img src="/tel.jpg" className="md:h-[375px] lg:h-[450px] w-full object-fill object-center" />
    </div>
    <div>
        <img src="/infi.jpg" className="md:h-[375px] lg:h-[450px] w-full object-fill object-center" />
    </div>
    <div>
        <img src="/ac.jpg" className="md:h-[375px] lg:h-[450px] w-full object-fill object-center" />
    </div>
    <div>
        <img src="/eid.jpg" className="md:h-[375px] lg:h-[450px] w-full object-fill object-center" />
    </div>
    <div>
        <img src="/kenwood.jpg" className="md:h-[375px] lg:h-[450px] w-full object-fill object-center" />
    </div>
    <div>
        <img src="/fan.jpg" className="md:h-[375px] lg:h-[450px] w-full object-fill object-center" />
    </div><div>
        <img src="/glam.jpg" className="md:h-[375px] lg:h-[450px] w-full object-fill object-center" />
    </div>
    <div>
        <img src="/time.jpg" className="md:h-[375px] lg:h-[450px] w-full object-fill object-center" />
    </div>
</Carousel>
    </div>
    <div className=" mb-5 w-full lg:h-[450px] md:h-[375px] md:mt-0 md:mb-0 md:ml-2 flex md:flex-col   md:w-1/3 md:space-y-3">
      <div className="w-full h-36  md:h-52">
        <img src="/bike.png" alt="" className="w-full h-full"/>
      </div>
      <div className="w-full h-36 md:h-52 ">
        <img src="/alfa.png" alt="" className="w-full h-full" />
      </div>
      
    </div>
    </div>
   
   
  )
}
