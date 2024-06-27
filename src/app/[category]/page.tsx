import { client } from "@/lib/sanity"
import Image from "next/image";
import Link from "next/link";

 const getData=async(category:string)=>{
    const query=`*[_type == "product" && category->name == "${category}"]
    {
        id,
        "imageUrl":images[0].asset->url,
        price,
        name,
        "slug":slug.current,
        "categoryName":category->name
    }`
    
    const data= await client.fetch(query);
    
    
    return data;
}

const page= async({params}:{params:{category:string}})=> {
   const data =await getData(params.category)
  
    return (
    <div>
       <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Products {params.category}</h2>
      
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4
        xl:gap-x-8">
            {data.map((product:any)=>
            {
                return(
                    <div key={product.id} className="group relative">
                        <div className="aspect-square w-full overflow-hidden rounded-md
                        bg-gray-200 group-hover:opacity-75 lg:h-80">
                            <Image
                            src={product.imageUrl}
                            alt="Product Image"
                            className="w-full h-full object-cover lg:h-full lg:w-full"
                            width={300}
                            height={300}
                            />

                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                <Link
                                href={`/product/${product.slug}`}
                                >
                                {product.name}
                                </Link>
                                </h3>
                                <p className="mt-1 text-gray-500 ">{product.categoryName}</p>
                                
                            </div>
                            <p className="text-sm font-medium  text-gray-900">{product.price}</p>
                        </div>
                    </div>
                )
            })}

        </div>

        </div>
    </div>
    </div>
  )
};


export default page;
