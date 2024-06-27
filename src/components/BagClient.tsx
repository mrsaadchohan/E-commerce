'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"
import {ShoppingBag} from "lucide-react"
import { useShoppingCart } from "use-shopping-cart";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Authserver from "./Authserver";



const Links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Men",
    href: "/Men",
  },
  {
    name: "Women",
    href: "/Women",
  },
  // {
  //   name: "Teens",
  //   href: "/Teens",
  // },
];


 function BagClient() {
  const pathName=usePathname()
  const {handleCartClick}= useShoppingCart()
  
  return (
    <div>
      <header className="mb-8 border-b">
      <div className="flex items-center flex-wrap justify-between mx-auto max-w-2xl py-2 sm:py-0 px-4 sm:px-6 lg:max-w-6xl">
        <Link href={"/"}>
          <h1 className="text-2xl md:text-4xl font-bold">
            Chohan<span className="text-primary">Store</span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
        {Links.map((link,id)=>
        {
            return(
              <div key={id}>
                {pathName === link.href?(
                  <Link href={link.href} className="text-lg font-semibold text-primary">
                  {link.name}
                  </Link>
                ):(
                  <Link href={link.href} className="text-lg font-semibold text-gray-600 transition
                  duration-100 hover:text-primary">
                  {link.name}
                  </Link>
                )}
              </div>
            )
        })}
        </nav>
      <div>
        {/* <Authserver/> */}
      </div>
        <div className="flex divide-x border-r sm:border-l">
        <Button className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:w-24 md:h-24
        rounded-none"
        onClick={()=> handleCartClick()}
        ><ShoppingBag/>
        <span className="hidden sm:block text-xs font-semibold ">Cart
        </span>
        </Button>

        </div>
      </div>
    </header> 
    </div>
  )
}

export default BagClient
