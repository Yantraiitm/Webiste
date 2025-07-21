"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/ui/section-heading"
import BlogCard, { Post } from "@/components/blogs/blog-card"
import { client } from "@/sanity/client"

export default function LatestBlogs() {
  const [latestPosts, setLatestPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchLatestPosts = async () => {
      const query = `*[_type == "post"]{
        _id,
        title,
        "slug": slug.current,
        excerpt,
        mainImage,
        publishedAt,
        author->{name}
      } | order(publishedAt desc)[0...2]`;
      const posts = await client.fetch<Post[]>(query);
      setLatestPosts(posts);
    };
    fetchLatestPosts();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Latest from our Blog"
          description="Stay updated with the latest trends, technologies, and insights in the world of robotics."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestPosts.map((post, index) => (
            <BlogCard
              key={post._id}
              post={post}
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
              className="border-[#883FE0] bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-[#883FE0] hover:to-[#FA8B8B] hover:text-white px-8"
            >
              Read All Articles
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

