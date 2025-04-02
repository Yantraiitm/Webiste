"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

// Sample blogs data
const blogs = [
  {
    id: 1,
    title: "The Future of Autonomous Robots",
    excerpt: "Exploring the advancements in autonomous robotics and what the future holds for this technology.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    author: "Dr. Jane Smith",
    date: "March 28, 2025",
    image: "https://images.unsplash.com/photo-1581092333203-42374bcf7d89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Technology",
    tags: ["Robotics", "AI", "Automation"],
  },
  {
    id: 2,
    title: "Machine Learning in Robotics: A Practical Guide",
    excerpt: "A comprehensive guide to implementing machine learning algorithms in robotics applications.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    author: "Prof. John Doe",
    date: "March 20, 2025",
    image: "https://images.unsplash.com/photo-1612914039075-943af2485b59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Education",
    tags: ["Machine Learning", "Robotics", "Programming"],
  },
  {
    id: 3,
    title: "Ethical Considerations in AI-Powered Robotics",
    excerpt: "Discussing the ethical implications and considerations when developing AI-powered robots.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    author: "Dr. Emily Chen",
    date: "March 15, 2025",
    image: "https://images.unsplash.com/photo-1612914039075-943af2485b59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Ethics",
    tags: ["AI Ethics", "Robotics", "Philosophy"],
  },
  {
    id: 4,
    title: "Building Your First Robot: A Beginner's Guide",
    excerpt: "Step-by-step instructions for beginners looking to build their first robot from scratch.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    author: "Michael Johnson",
    date: "March 10, 2025",
    image: "https://images.unsplash.com/photo-1612914039075-943af2485b59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Tutorial",
    tags: ["DIY", "Robotics", "Beginner"],
  },
  {
    id: 5,
    title: "The Role of Robotics in Modern Healthcare",
    excerpt: "Examining how robotics is transforming healthcare delivery and patient outcomes.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    author: "Dr. Sarah Williams",
    date: "March 5, 2025",
    image: "https://images.unsplash.com/photo-1612914039075-943af2485b59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Healthcare",
    tags: ["Medical Robotics", "Healthcare", "Innovation"],
  },
  {
    id: 6,
    title: "Robotics Competitions: Why They Matter",
    excerpt: "The importance of robotics competitions in fostering innovation and skill development.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl.",
    author: "Alex Thompson",
    date: "February 28, 2025",
    image: "https://images.unsplash.com/photo-1612914039075-943af2485b59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Education",
    tags: ["Competitions", "Robotics", "STEM Education"],
  },
]

// Categories for filtering
const categories = ["All", "Technology", "Education", "Ethics", "Tutorial", "Healthcare"]

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Filter blogs based on search query and category
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/images/BACKGROUND-IMAGE.png" alt="Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-300">
              Stay updated with the latest trends, technologies, and insights in the world of robotics.
            </p>
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
                placeholder="Search articles..."
                className="w-full bg-black border border-gray-700 rounded-lg py-2 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  className={`px-4 py-1 rounded-full text-xs font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden">
              <Image src={blogs[0].image || "/placeholder.svg"} alt={blogs[0].title} fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>{blogs[0].date}</span>
                <span>•</span>
                <span>{blogs[0].category}</span>
              </div>
              <h2 className="text-3xl font-bold">{blogs[0].title}</h2>
              <p className="text-gray-300">{blogs[0].excerpt}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                <span className="text-sm font-medium">{blogs[0].author}</span>
              </div>
              <Link href={`/blogs/${blogs[0].id}`}>
                <Button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white">Read Article</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.slice(1).map((blog, index) => (
                <motion.div
                  key={blog.id}
                  className="bg-black rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-48">
                    <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
                    <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {blog.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>By {blog.author}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                    <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                    <Link href={`/blogs/${blog.id}`}>
                      <Button variant="link" className="text-orange-500 p-0 hover:text-orange-400">
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

