"use client"
import Image from "next/image"
import { FaQuoteLeft } from "react-icons/fa6"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'

// Data
const testimonaildata=[
  {
    img:'/tes1.jpg',
    message:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at praesentium dolores magni error ex, nihil',
    name:'Lucy Anthony'
  },
  {
    img:'/tes1.jpg',
    message:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at praesentium dolores magni error ex, nihil',
    name:'Michael Hold'
  },
  {
    img:'/tes1.jpg',
    message:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at praesentium dolores magni error ex, nihil',
    name:'Maria Garcia'
  },
  {
    img:'/tes1.jpg',
    message:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at praesentium dolores magni error ex, nihil',
    name:'Lucy Anthony'
  },
  {
    img:'/tes1.jpg',
    message:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at praesentium dolores magni error ex, nihil',
    name:'Michael Hold'
  },
  {
    img:'/tes1.jpg',
    message:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at praesentium dolores magni error ex, nihil',
    name:'Maria Garcia'
  },
  
  ]

function Testimonial() {
  return (
    <section className='py-12 xl:py-28' id='testimonial'>
        <div className="container mx-auto">
          <h2 className="mx-auto text-center text-3xl font-bold">Our Testimonial</h2>
          <div className="mt-3">
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{
                clickable:true
            }}
            breakpoints={{
              768:{
                slidesPerView:2,
                spaceBetween:30
              },
              1024:{
                slidesPerView:3,
                spaceBetween:30
              },
            }}
            className="h-[320px] "
            >
              {testimonaildata.map((person, index)=>
              {
                return(
                  <SwiperSlide key={index} className="h-full">
                      <div className="flex flex-col justify-center items-center gap-6 text-center h-full">
                        <Image 
                        src={person.img} 
                        width={90}
                        height={90} 
                        alt=""
                        className="rounded-full border-2 bg-red-500"
                        />
                        <div className="flex flex-col justify-center items-center">
                          <FaQuoteLeft className="text-2xl text-gray-200"/>
                          <p className="max-w-[388px] mb-4">{person.message}</p>
                          <span className="text-2xl text-primary">{person.name}</span>
                        </div>
                      </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
    </section>
  )
}

export default Testimonial