"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/ui/section-heading"
import { getFeaturedCourses, Course } from "@/data/courses"

// Course card component
const CourseCard = ({ course, index }: { course: Course; index: number }) => {
  return (
    <motion.div
      className="bg-gray-900/60 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800 hover:border-[#883FE0]/50 transition duration-500 h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 },
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative h-48 w-full">
        <Image
          src={course.image || "/images/ROBOTBG1.png"}
          alt={course.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white text-xs px-2 py-1 rounded-full">
          {course.level}
        </div>
        <div className="absolute top-2 left-2 bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
          {course.category}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
        <p className="text-sm text-gray-400 mb-2">Instructor: {course.instructor}</p>
        <p className="text-sm text-gray-300 mb-4 flex-grow">{course.description}</p>
        
        <div className="mt-auto">
          <Link href={`/courses/${course.id}`} className="text-transparent bg-clip-text bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] hover:from-[#7F35CF] hover:to-[#F87878] text-sm flex items-center">
            View course details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedProjects() {
  const featuredCourses = getFeaturedCourses();
  
  return (
    <section className="py-20 bg-gradient-to-b from-black to-black-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#883FE0]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FA8B8B]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <SectionHeading
          title="Featured Courses"
          description="Explore our cutting-edge robotics courses taught by industry experts and academic mentors."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/courses">
            <Button
              variant="outline"
              className="border-transparent bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white hover:from-[#7F35CF] hover:to-[#F87878] px-8"
            >
              View All Courses
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
