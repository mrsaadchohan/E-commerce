export  interface SProduct
{
    id:string,
    imageUrl:string,
    price:number,
    slug:string,
    categoryName:string,
    name:string
}

export interface FullProduct
{
    id:string,
    images:any,
    price:number,
    slug:string,
    categoryName:string,
    name:string,
    description:string,
    price_id:string
}
export interface simplifiedProduct {
    _id: string;
    imageUrl: string;
    price: number;
    slug: string;
    categoryName: string;
    name: string;
  }