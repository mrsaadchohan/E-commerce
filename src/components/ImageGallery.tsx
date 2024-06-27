"use client"
import { urlFor } from "@/lib/sanity"
import Image from "next/image"
import { useState } from "react";
interface IAppProps
{
    images:any;
}

export default function ImageGallery({ images } : IAppProps)
{
    const [bigImage,setBigImage]=useState(images[0])
    const handleBigImage=(image:any)=>
        {
            setBigImage(image)
        }
    return(
        <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {images &&images.map((image:any,id:any)=>
                {
                    return(
                        <div key={id}>
                     <Image src={urlFor(image).url()}
                       width={200}
                       height={200}
                       alt="gallery"
                       className="w-full h-full object-cover object-center cursor-pointer"
                       onClick={()=>setBigImage(image)}
                       />
                    </div>

                    )
                })}
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-200
            lg:col-span-4">
                <Image
                src={urlFor(bigImage).url()}
                alt="Big"
                width={500}
                height={500}
                className="w-full h-full object-cover object-center"
                />

            </div>
        </div>
    )
}