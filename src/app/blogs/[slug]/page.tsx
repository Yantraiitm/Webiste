"use client"

import { useState, useEffect } from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/client"
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import { ChevronRight, Calendar, User } from "lucide-react"

export interface Post {
  _id: string;
  title: string;
  excerpt: string;
  mainImage: any;
  body: any[];
  slug: { current: string };
  author: { name: string, image?: any };
  publishedAt: string;
  category: { title: string };
}

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

const portableTextComponents = {
    types: {
      image: ({ value }: { value: any }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <div className="relative my-8">
            <Image
              src={urlFor(value).url()}
              alt={value.alt || 'Blog post image'}
              width={800}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        );
      },
    },
    marks: {
        link: ({children, value}: {children: React.ReactNode, value?: { href?: string }}) => {
          if (!value?.href) {
            return <>{children}</>;
          }
          const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
          return (
            <a href={value.href} rel={rel} className="text-purple-400 hover:underline">
              {children}
            </a>
          )
        }
    },
    block: {
        h1: ({children}: any) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
        h2: ({children}: any) => <h2 className="text-3xl font-bold my-5">{children}</h2>,
        h3: ({children}: any) => <h3 className="text-2xl font-bold my-4">{children}</h3>,
        h4: ({children}: any) => <h4 className="text-xl font-bold my-3">{children}</h4>,
        blockquote: ({children}: any) => <blockquote className="border-l-4 border-purple-500 pl-4 my-6 italic text-gray-300">{children}</blockquote>,
    }
  };

export default function BlogPostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!slug) return

    const fetchPost = async () => {
      setIsLoading(true)
      const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        excerpt,
        mainImage,
        body,
        slug,
        "author": author->{name, image},
        publishedAt,
        "category": categories[0]->{title}
      }`
      const sanityPost = await client.fetch<Post>(query, { slug })
      
      if (sanityPost) {
        setPost(sanityPost)
      } else {
        notFound()
      }
      setIsLoading(false)
    }
    
    fetchPost()
  }, [slug])

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  if (!post) return notFound()

  return (
    <div className="min-h-screen bg-black">
      {/* Post Header */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
            {post.mainImage && (
                <Image 
                    src={urlFor(post.mainImage).url()} 
                    alt={post.title} 
                    fill 
                    className="object-cover" 
                />
            )}
            <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center text-sm text-gray-400 mb-4">
                    <Link href="/blogs" className="hover:text-orange-500">Blog</Link>
                    {post.category && <>
                        <ChevronRight size={14} className="mx-2" />
                        <span>{post.category.title}</span>
                    </>}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-gray-300">
                    <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>{post.author?.name || 'Yantra Team'}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="prose prose-invert lg:prose-xl max-w-3xl mx-auto">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>
        </div>
      </section>
    </div>
  )
}