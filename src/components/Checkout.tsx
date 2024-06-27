'use client'
import React from 'react'
import { Button } from './ui/button'
import { useShoppingCart } from 'use-shopping-cart'
import { urlFor } from '@/lib/sanity'
export interface ProductCart
{
    name:string,
    description:string,
    price:number,
    currency:string,
    image:any,
    price_id:string
}
export default function Checkout({description,currency,name,price,image,price_id}:ProductCart) {
  const {checkoutSingleItem}=useShoppingCart();
  function buyNow(price_id:string)
  {
    checkoutSingleItem(price_id)
  }
  const product={
    name:name,
    description:description,
    price:price,
    currency:currency,
    image:urlFor(image).url(),
    price_id:price_id,
  }
    return (
    <div>
            <Button
            onClick={()=>{
                buyNow(product.price_id)
            }}
            >Add To Cart </Button>
    </div>
  )
}


