"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { client } from "@/sanity/client"
import imageUrlBuilder from '@sanity/image-url'

export interface Post {
  _id: string;
  title: string;
  excerpt: string;
  mainImage: any;
  slug: { current: string };
  author: { name: string };
  publishedAt: string;
  category: { title: string };
}

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

const staticCategories = ["All", "Technology", "Education", "Ethics", "Tutorial", "Healthcare"]

export default function BlogsPage() {
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      const query = `*[_type == "post"]{
        _id,
        title,
        excerpt,
        mainImage,
        slug,
        "author": author->{name},
        publishedAt,
        "category": categories[0]->{title}
      } | order(publishedAt desc)`
      const sanityPosts = await client.fetch<Post[]>(query)
      setAllPosts(sanityPosts)
      setIsLoading(false)
    }
    fetchPosts()
  }, [])

  const filteredBlogs = allPosts.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (blog.excerpt && blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || (blog.category && blog.category.title === selectedCategory)
    return matchesSearch && matchesCategory
  })

  const featuredPost = filteredBlogs.length > 0 ? filteredBlogs[0] : null
  const otherPosts = filteredBlogs.length > 1 ? filteredBlogs.slice(1) : []

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  return (
    <div >
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
              {staticCategories.map((category) => (
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
      {featuredPost && (
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
                <Image src={featuredPost.mainImage ? urlFor(featuredPost.mainImage).url() : "/placeholder.svg"} alt={featuredPost.title} fill className="object-cover" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                  {featuredPost.category && <><span>•</span><span>{featuredPost.category.title}</span></>}
                </div>
                <h2 className="text-3xl font-bold">{featuredPost.title}</h2>
                <p className="text-gray-300">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                  <span className="text-sm font-medium">{featuredPost.author?.name || 'Yantra Team'}</span>
                </div>
                <Link href={`/blogs/${featuredPost.slug.current}`}>
                  <Button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white">Read Article</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          {otherPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((blog, index) => (
                <motion.div
                  key={blog._id}
                  className="bg-black rounded-lg overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-48">
                    <Image src={blog.mainImage ? urlFor(blog.mainImage).url() : "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
                    {blog.category && (
                      <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                        {blog.category.title}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>By {blog.author?.name || 'Yantra Team'}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">{blog.excerpt}</p>
                    <Link href={`/blogs/${blog.slug.current}`}>
                      <Button variant="link" className="text-orange-500 p-0 hover:text-orange-400">
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            !featuredPost && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  )
}

