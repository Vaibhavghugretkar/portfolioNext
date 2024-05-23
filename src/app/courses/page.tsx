import Image from "next/image";
import React from "react";
import { CardBody, CardContainer } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

// Define the course data object with project URLs
const courseData = {
  courses: [
    {
      id: 1,
      title: "Music Class Website",
      description: "A simple Music Class website built with Next.js",
      image: "/muscClass.jpg",
      url: "https://vaibhavghugretkar.github.io/MusicClass/",
    },
    {
      id: 2,
      title: "Lost and Found Website",
      description: "A lost and found website built with React and Firebase",
      image: "./recliam.jpg",
      url: "https://findurs.netlify.app",
    },
    {
      id: 3,
      title: "Nithya Foundation Website",
      description: "A Website for NGO which spreads awareness about menstrual health and hygiene built with React",
      image: "./nithyaf.jpg",
      url: "https://vaibhavghugretkar.github.io/nithya_ngo/",
    },
    {
      id: 4,
      title: "AxiomNews",
      description: "A news website which provides the latest news",
      image: "./axiomNews.jpg",
      url: "https://vaibhavghugretkar.github.io/axiomnewsapp/",
    },
    // Add more project objects as needed
  ],
};

export default function Courses() {

  

  return (
    <div className='bg-gradient-to-r from-black to-gray-900 text-white min-h-screen bg-black py-12 pt-36' id="projects">
      <div className="text-center">
        <h2 className="text-4xl text-teal-600 font-semibold tracking-wide uppercase">
          Projects
        </h2>
      </div>

      <div className="flex flex-wrap justify-center">
        {courseData.courses.map((course, index) => (
          <CardContainer key={index} className="inter-var m-4">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <h3 className="text-xl font-bold text-neutral-600 dark:text-white">{course.title}</h3>
              <p className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">{course.description}</p>
              <div className="w-full mt-4">
                <Image
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
              </div>
              <div className="flex justify-between items-center mt-20">
                <button
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                 
                >
                <Link href={`${course.url}`}>Try Now</Link>
                </button>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
