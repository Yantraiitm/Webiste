"use client"

import { useState, useEffect } from "react"
import { useParams, notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, PlayCircle, ExternalLink, ArrowLeft, BookOpen, CheckCircle, Star } from "lucide-react"
import { client } from "@/sanity/client"

export interface Course {
  _id: string;
  title: string;
  instructor: string;
  description: string;
  category: string;
  level: string;
  mainImage?: any;
  sessions?: { name: string; date?: string; link?: string; _key: string; }[];
  slug: { current: string; };
}

export default function CourseSessionsPage() {
  const { slug } = useParams()
  const [course, setCourse] = useState<Course | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSessionIndex, setSelectedSessionIndex] = useState(0)

  useEffect(() => {
    if (!slug) return

    const fetchCourse = async () => {
      setIsLoading(true)
      const query = `*[_type == "course" && slug.current == $slug][0]`
      const foundCourse = await client.fetch<Course>(query, { slug })
      
      if (foundCourse) {
        setCourse(foundCourse)
        setIsLoading(false)
      } else {
        notFound()
      }
    }
    
    fetchCourse()
  }, [slug])

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (!course) return notFound()

  const selectedSession = course.sessions && course.sessions.length > 0 
    ? course.sessions[selectedSessionIndex] 
    : null

  const getYoutubeId = (url: string | undefined) => {
    if (!url) return null
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
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
            <Link href={`/courses/${slug}`} className="hover:text-purple-500">{course.title}</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-white">Sessions</span>
          </div>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <p className="text-gray-400 mt-2">Instructor: {course.instructor}</p>
            </div>
            <Link href={`/courses/${slug}`}>
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
                        <p className="text-gray-400">Video content unavailable for this session.</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3">{selectedSession?.name || "Course Introduction"}</h2>
                  {selectedSession?.date && (
                    <div className="flex items-center text-gray-400 mb-4">
                      <Calendar size={16} className="mr-2" />
                      Session Date: {new Date(selectedSession.date).toLocaleDateString()}
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
                      key={session._key}
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
                            {new Date(session.date).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}