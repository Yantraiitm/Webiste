"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Star, Clock, Users, BookOpen } from "lucide-react"

import { courses, Course } from "@/data/courses"

// Categories for filtering - derived from course data
const categories = ["All", ...Array.from(new Set(courses.map(course => course.category)))]
const levels = ["All Levels", "beginner", "intermediate", "advanced"]

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All Levels")

  // Filter courses based on search query, category, and level
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "All Levels" || course.level === selectedLevel
    return matchesSearch && matchesCategory && matchesLevel
  })

  const featuredCourses = courses.filter((course) => course.featured)

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 relative">
          <div className="absolute inset-0 z-0 opacity-60">
                <Image src="/images/abstract.png" alt="Background" fill className="object-cover" />
              </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Courses</h1>
            <p className="text-xl text-gray-300">Expand your robotics knowledge with our expert-led courses.</p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full bg-black border border-gray-700 rounded-lg py-2 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
            </div>

            <div className="flex flex-wrap gap-4">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    className={`px-4 py-1 rounded-full text-xs font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-[#883FE0] hover:to-[#FA8B8B]"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Level Filters */}
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <motion.button
                    key={level}
                    className={`px-4 py-1 rounded-full text-xs font-medium transition-colors ${
                      selectedLevel === level 
                        ? "bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white" 
                        : "bg-gray-800 text-gray-300 hover:bg-gradient-to-r hover:from-[#883FE0] hover:to-[#FA8B8B]"
                    }`}
                    onClick={() => setSelectedLevel(level)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {level}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Courses
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Link href={`/courses/${course.id}`} className="block h-full">
                  <div className="relative h-48">
                    <Image 
                      src={course.image || "/placeholder.svg"} 
                      alt={course.title} 
                      fill 
                      className="object-cover" 
                    />
                    <div className="absolute top-2 right-2 bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white text-xs font-bold px-2 py-1 rounded">
                      {course.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-yellow-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < 4 ? "currentColor" : "none"} />
                      ))}
                      <span className="text-sm text-gray-400 ml-1">
                        {course.sessions?.length || 0} sessions
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-400 mb-4">{course.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{course.sessions?.length || 0} sessions</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen size={14} />
                        <span>{course.level}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                      <span className="text-sm font-medium">{course.instructor}</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] hover:opacity-90 text-white">
                      Enroll Now
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            All Courses
          </motion.h2>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  className="bg-black rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/courses/${course.id}`} className="block h-full">
                    <div className="relative h-40">
                      <Image 
                        src={course.image || "/placeholder.svg"} 
                        alt={course.title} 
                        fill 
                        className="object-cover" 
                      />
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white text-xs font-bold px-2 py-1 rounded">
                        {course.category}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-1 text-yellow-500 mb-1">
                        <Star size={12} fill="currentColor" />
                        <span className="text-xs text-gray-400">
                          {course.sessions?.length || 0} sessions
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-1">{course.title}</h3>
                      <p className="text-gray-400 text-sm mb-2 line-clamp-2">{course.description}</p>
                      <div className="flex flex-wrap gap-2 text-xs text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          <span>{course.sessions?.length || 0} sessions</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen size={12} />
                          <span>{course.level}</span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-purple-500 text-purple-500 hover:bg-gradient-to-r hover:from-[#883FE0] hover:to-[#FA8B8B] hover:text-white hover:border-transparent"
                      >
                        View Course
                      </Button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No courses found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

