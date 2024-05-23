import Link from "next/link";
// import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className=" bg-gradient-to-r from-black to-gray-900 h-auto md:h-[40 rem] w-full  rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
      {/* <Spotlight
        className="top-0 left--10 md:left-60 md:-top-20"
        fill="white"
      /> */}

      <div className=" mt-20 p-12 relative z-10 w-full text-center ">
        <div className="flex justify-center mt-7">
        <img src="2023-09-10-01-01-23-165(1).jpg" width={150} className="rounded-full"></img>
        </div>
        <h1 className="text-white text-3xl mt-5">Hey there I'm,</h1>
        <h1 className="mt-6 text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500 md:mt-20rem text-4xl md:text-5xl font-bold">
          Vaibhav Ghugretkar
        </h1>

        <p className="mt-7 font-2xl text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          A passionate Full-Stack Developer who thrives on building websites and
          applications. Explore my work and discover how I can help you
          transform your digital ideas into reality.
        </p>

        <div className="mt-4">
          <Link href={"/courses"}></Link>
        </div>
        <Button
          borderRadius="1.75rem"
          className="text-xl bg-white dark:bg-black  text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
