"use client"

import { useState, useEffect } from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Clock, Calendar, PlayCircle, ExternalLink, ArrowLeft, BookOpen, CheckCircle, Star } from "lucide-react"
import { courses, Course } from "@/data/courses"

export default function CourseSessionsPage() {
  const { id } = useParams()
  const [course, setCourse] = useState<Course | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSessionIndex, setSelectedSessionIndex] = useState(0)

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

  const selectedSession = course.sessions && course.sessions.length > 0 
    ? course.sessions[selectedSessionIndex] 
    : null

  // Extract YouTube video ID from the link
  const getYoutubeId = (url: string | undefined) => {
    if (!url) return null
    
    // Handle various YouTube URL formats
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    
    return (match && match[2].length === 11)
      ? match[2]
      : null
  }

  const youtubeId = selectedSession?.link ? getYoutubeId(selectedSession.link) : null

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-black pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-400 mb-4">
            <Link href="/courses" className="hover:text-purple-500">Courses</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link href={`/courses/${id}`} className="hover:text-purple-500">{course.title}</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-white">Sessions</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <p className="text-gray-400 mt-2">Instructor: {course.instructor}</p>
            </div>
            <Link href={`/courses/${id}`}>
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Course
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              {/* Video Player */}
              <div className="bg-gray-900 rounded-lg overflow-hidden mb-8">
                <div className="relative">
                  {youtubeId ? (
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        title={selectedSession?.name || "Course Video"}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : (
                    <div className="aspect-video bg-gray-800 flex items-center justify-center">
                      <div className="text-center p-6">
                        <PlayCircle size={60} className="mx-auto text-gray-600 mb-4" />
                        <p className="text-gray-400">Video content unavailable</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3">{selectedSession?.name || "Course Introduction"}</h2>
                  {selectedSession?.date && (
                    <div className="flex items-center text-gray-400 mb-4">
                      <Calendar size={16} className="mr-2" />
                      Session Date: {selectedSession.date}
                    </div>
                  )}
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
                </div>
              </div>

              {/* Course Description */}
              <div className="bg-gray-900 rounded-lg overflow-hidden p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                <div className="prose prose-invert max-w-none">
                  <p>{course.description}</p>
                  <p className="mt-4">By the end of this course, you'll have a solid understanding of {course.category} and be able to apply these concepts in your own projects.</p>
                </div>
              </div>

              {/* Session Content */}
              <div className="bg-gray-900 rounded-lg overflow-hidden p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Session Content</h2>
                <div className="prose prose-invert max-w-none">
                  <p>In this session, you'll learn about the core concepts of {selectedSession?.name || course.title}. The instructor {course.instructor} will guide you through the theoretical foundations and practical applications.</p>
                  
                  <h3 className="text-xl font-bold mt-6 mb-3">What You'll Learn</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Understand fundamental concepts of {course.category}</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Apply practical techniques in real-world scenarios</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Build your own projects using the skills learned</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Troubleshoot common problems in {course.category} projects</span>
                    </li>
                  </ul>
                  
                  {selectedSession?.link && (
                    <div className="mt-6">
                      <h3 className="text-xl font-bold mb-3">Resources</h3>
                      <a 
                        href={selectedSession.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-purple-500 hover:text-purple-400 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Open original video in new tab
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-900 rounded-lg overflow-hidden sticky top-20">
                <div className="p-4 border-b border-gray-800">
                  <h3 className="text-lg font-bold">Course Content</h3>
                  <div className="text-sm text-gray-400">
                    {course.sessions?.length || 0} sessions • {course.level} level
                  </div>
                </div>
                
                <div className="max-h-[600px] overflow-y-auto">
                  {course.sessions && course.sessions.map((session, index) => (
                    <motion.button 
                      key={index}
                      className={`w-full p-4 text-left border-b border-gray-800 transition flex items-start hover:bg-gray-800 ${
                        selectedSessionIndex === index ? 'bg-gray-800' : ''
                      }`}
                      onClick={() => setSelectedSessionIndex(index)}
                      whileHover={{ x: 4 }}
                    >
                      <div className="mr-4 mt-1">
                        {selectedSessionIndex === index ? (
                          <PlayCircle size={20} className="text-purple-500" />
                        ) : (
                          <PlayCircle size={20} className="text-gray-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium ${selectedSessionIndex === index ? 'text-purple-500' : ''}`}>
                          {session.name}
                        </h4>
                        {session.date && (
                          <div className="text-sm text-gray-500 flex items-center mt-1">
                            <Calendar size={14} className="mr-1" />
                            {session.date}
                          </div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Course Info Card */}
              <div className="bg-gray-900 rounded-lg overflow-hidden mt-6">
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-4">Course Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3" />
                      <span>{course.sessions?.length || 0} video sessions</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3" />
                      <span>{course.category} expertise</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3" />
                      <span>Hands-on learning</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3" />
                      <span>Available on all devices</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle size={20} className="text-green-500 mr-3" />
                      <span>{course.level} level</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}