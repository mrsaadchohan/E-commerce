import { Button } from "./ui/button";

const NewsLetter = () => {
    return (
      <section className="container mx-auto px-12">
        <form className="bg-primary text-white px-4 rounded-xl md:rounded-[30px] flex flex-col justify-center items-center py-6 md:py-24">
          <p className="md:font-semibold text-lg md:text-xl text-center mb-3">
            Explore More About Our Store
          </p>
          <h6 className="md:font-semibold font-medium text-2xl md:text-3xl lg:text-5xl text-center">
            Sign Up for Our Newsletter
          </h6>
  
          <div className="flex-col justify-center items-center w-full md:flex-row flex pt-12">
            <input
              type="email"
              placeholder="Your email"
              className=" bg-white  h-11 md:h-16 mb-2 md:mb-0 rounded-xl pl-6 md:mr-5 md:w-[452px] text-black placeholder:text-white focus:outline-none"
            />
            {/* <button type="button" className="bg-white text-black px-5 py-0 rounded-md">
              Subscribe
            </button> */}
            <Button type="button" className="bg-white  text-black p-7  rounded-md " variant={"secondary"}>
                Subscribe
            </Button>
          </div>
        </form>
      </section>
    );
  };
  
  export default NewsLetter;