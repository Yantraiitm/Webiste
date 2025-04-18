"use client"

import { useState, useEffect } from "react"
import { useParams, notFound, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Clock, Star, Users, CheckCircle, PlayCircle, Calendar, BookOpen } from "lucide-react"
import { courses, Course } from "@/data/courses"

export default function CourseDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const [course, setCourse] = useState<Course | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const courseId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id as string)
    const foundCourse = courses.find(c => c.id === courseId)
    
    if (foundCourse) {
      setCourse(foundCourse)
      setIsLoading(false)
    } else {
      notFound()
    }
  }, [id])

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (!course) return notFound()

  const handleEnroll = () => {
    router.push(`/courses/${id}/sessions`)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Course Header */}
      <section className="bg-gradient-to-r from-gray-900 to-black pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <div className="flex items-center text-sm text-gray-400 mb-4">
                <Link href="/courses" className="hover:text-purple-500">Courses</Link>
                <ChevronRight size={14} className="mx-2" />
                <span>{course.category}</span>
                <ChevronRight size={14} className="mx-2" />
                <span className="text-white">{course.title}</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-gray-300 mb-6">{course.description}</p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500" fill={i < 4 ? "currentColor" : "none"} />
                  ))}
                  <span className="ml-2 text-gray-400">(4.0)</span>
                </div>
                <div className="text-gray-400">
                  {course.sessions?.length || 0} sessions
                </div>
                <div className="text-gray-400 flex items-center">
                  <BookOpen size={16} className="mr-1" />
                  {course.level}
                </div>
              </div>
              <div className="mb-6">
                <span className="text-gray-400">Created by </span>
                <span className="font-medium text-purple-500">{course.instructor}</span>
              </div>
            </div>
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
                <div className="relative h-48">
                  <Image 
                    src={course.image || "/placeholder.svg"} 
                    alt={course.title} 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <PlayCircle size={60} className="text-white opacity-80" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <Button 
                      className="w-full bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] hover:opacity-90 text-white py-6 text-lg font-bold"
                      onClick={handleEnroll}
                    >
                      Enroll Now
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3" />
                      <span>{course.sessions?.length || 0} video sessions</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3" />
                      <span>Robotics expertise</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3" />
                      <span>Hands-on learning</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3" />
                      <span>Available on all devices</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Description */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">About This Course</h2>
            <div className="prose prose-invert max-w-none">
              <p>{course.description}</p>
              <p className="mt-4">By the end of this course, you'll have a solid understanding of {course.category} and be able to apply these concepts in your own projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Similar Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses
              .filter(c => c.category === course.category && c.id !== course.id)
              .slice(0, 3)
              .map((relatedCourse) => (
                <Link href={`/courses/${relatedCourse.id}`} key={relatedCourse.id}>
                  <motion.div 
                    className="bg-black rounded-lg overflow-hidden shadow-lg"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-40">
                      <Image 
                        src={relatedCourse.image || "/placeholder.svg"} 
                        alt={relatedCourse.title} 
                        fill 
                        className="object-cover" 
                      />
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white text-xs font-bold px-2 py-1 rounded">
                        {relatedCourse.category}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-1">{relatedCourse.title}</h3>
                      <p className="text-gray-400 text-sm mb-2 line-clamp-2">{relatedCourse.description}</p>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock size={14} className="mr-1" />
                        <span>{relatedCourse.sessions?.length || 0} sessions</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}