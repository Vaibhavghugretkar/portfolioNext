'use client'
import CourseData from "../data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

export default function FeaturedCourses() {
interface Course{
        id: number,
        title: string,
        slug: string,
        description: string,
        price: number,
        instructor: string,
        isFeatured: boolean,
}

const featuredCourses = CourseData.courses.filter((course:Course)=> course.isFeatured)

  return (
    <div className="py-12 bg-gradient-to-r from-black to-gray-900" id="skills">
      <div>
        <div className="text-center">
          <h2 className="text-4xl text-teal-600 font-semibold tracking-wide uppercase">
            Skills
          </h2>
          
        </div>
      </div>

      <div className="mt-10 p-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
{featuredCourses.map((course:Course)=>(
<div key={course.id} className="flex justify-center">
<BackgroundGradient
  className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full w-64 max-w-sm ">

<div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg font-bold sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-lg text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                
                            </div>
</BackgroundGradient>
    </div>
))}
</div>

      </div>

    
    </div>
  );
}
