"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/ui/section-heading"
import { client, urlFor } from "@/sanity/client"

// Project interface from Sanity
export interface Project {
  _id: string;
  title: string;
  author: string;
  description: string;
  images: any[];
  category: string;
  slug: { current: string };
}

// Project card component
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      className="bg-gray-900/60 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-800 hover:border-[#883FE0]/50 transition duration-500 h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 },
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative h-48 w-full">
        <Image
          src={project.images?.[0] ? urlFor(project.images[0]).url() : "/images/ROBOTBG1.png"}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white text-xs px-2 py-1 rounded-full">
          {project.category}
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-400 mb-2">By: {project.author}</p>
        <p className="text-sm text-gray-300 mb-4 flex-grow line-clamp-3">{project.description}</p>
        
        <div className="mt-auto">
          <Link href={`/projects/${project.slug.current}`} className="text-transparent bg-clip-text bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] hover:from-[#7F35CF] hover:to-[#F87878] text-sm flex items-center">
            View project details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedProjects() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      const query = `*[_type == "project" && featured == true]{
        _id, title, author, description, images, category, slug
      } | order(_createdAt desc)[0...3]`;
      const projects = await client.fetch<Project[]>(query);
      setFeaturedProjects(projects);
    };
    fetchFeaturedProjects();
  }, []);
  
  return (
    <section className="py-20 bg-gradient-to-b from-black to-black-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#883FE0]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FA8B8B]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <SectionHeading
          title="Featured Projects"
          description="Explore our innovative robotics projects created by club members."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/projects">
            <Button
              variant="outline"
              className="border-transparent bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white hover:from-[#7F35CF] hover:to-[#F87878] px-8"
            >
              View All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
