"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "@/sanity/client"

export interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  mainImage: any;
  publishedAt: string;
  author: {
    name: string;
  };
}

interface BlogCardProps {
  post: Post;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const postDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      className="bg-gray-900/60 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800 hover:border-[#883FE0]/50 transition duration-500 h-full flex flex-col group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/blogs/${post.slug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.mainImage ? urlFor(post.mainImage).url() : "https://placehold.co/800x400/333/FFA500?text=Blog+Post"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-sm text-gray-400 mb-2">{postDate} • by {post.author.name}</p>
        <Link href={`/blogs/${post.slug}`} className="block">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-300 mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
        <div className="mt-auto">
          <Link href={`/blogs/${post.slug}`} className="text-transparent bg-clip-text bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] hover:from-[#7F35CF] hover:to-[#F87878] text-sm flex items-center">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

