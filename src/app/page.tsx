import BestSaving from "@/components/BestSaving";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newest from "@/components/Newest";
import NewsLetter from "@/components/Newsletter";
import Testimonial from "@/components/Testimonial";

function Home()
{
  return(
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero/>
      <Newest/>
      <BestSaving/>
      <Testimonial/>
      <NewsLetter/>
    </div>
  )
}
export default Home;