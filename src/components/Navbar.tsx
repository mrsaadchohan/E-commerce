// 'use server'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button"
import {ShoppingBag} from "lucide-react"
import { useShoppingCart } from "use-shopping-cart";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Authserver from "./Authserver";
import BagClient from "./BagClient";






 function Navbar() {
  
  
  return (
    <div className="">
      <BagClient/>
      <Authserver />
    </div>
  )
}

export default Navbar
