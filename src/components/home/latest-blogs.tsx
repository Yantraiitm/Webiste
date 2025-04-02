"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/ui/section-heading"
import BlogCard from "@/components/blogs/blog-card"

// Sample blogs data
const latestBlogs = [
  {
    id: 1,
    title: "The Future of Autonomous Robots",
    excerpt: "Exploring the advancements in autonomous robotics and what the future holds for this technology.",
    author: "Dr. Jane Smith",
    date: "March 28, 2025",
    image: "https://placehold.co/800x400/333/FFA500?text=Autonomous+Robots",
  },
  {
    id: 2,
    title: "Machine Learning in Robotics: A Practical Guide",
    excerpt: "A comprehensive guide to implementing machine learning algorithms in robotics applications.",
    author: "Prof. John Doe",
    date: "March 20, 2025",
    image: "https://placehold.co/800x400/333/FFA500?text=Machine+Learning",
  },
]

export default function LatestBlogs() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Latest from our Blog"
          description="Stay updated with the latest trends, technologies, and insights in the world of robotics."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestBlogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              value={{
                title: blog.title,
                value: blog.id.toString(),
                description: blog.excerpt,
              }}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/blogs">
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8"
            >
              Read All Articles
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

