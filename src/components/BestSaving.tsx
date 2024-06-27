
import { TbTruckDelivery } from "react-icons/tb";
import { GiBrainFreeze } from "react-icons/gi";
import { RiAwardFill } from "react-icons/ri";

function BestSaving() {
  return (
    <div className="container mt-9">
      <h3 className="mx-auto text-center text-3xl font-bold">Why Shop with us </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-8">
        <div className="bg-slate-100 text-center py-9 px-3" >
        <TbTruckDelivery size={50} className="text-primary mx-auto"/>
        <h4 className="mt-2 font-medium text-[20px] ">Fast Delievery</h4>
        <p className="text-[16px] px-4 mt-2">variations of passages of Lorem Ipsum available</p>
        </div>

        <div className="bg-slate-100 text-center py-9 px-3" >
        <GiBrainFreeze size={50} className="text-primary mx-auto"/>
        <h4 className="mt-2 font-medium text-[20px] ">Free Shipping</h4>
        <p className="text-[16px] px-4 mt-2">variations of passages of Lorem Ipsum available</p>
        </div>

        <div className="bg-slate-100 text-center py-9 px-3" >
        <RiAwardFill size={50} className="text-primary mx-auto"/>
        <h4 className="mt-2 font-medium text-[20px] ">Best Quality</h4>
        <p className="text-[16px] px-4 mt-2">variations of passages of Lorem Ipsum available</p>
        </div>

      </div>
    </div>
  )
}

export default BestSaving
