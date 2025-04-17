"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
    project: {
      id: number;
      title: string;
      description: string;
      image: string;
      category: string;
      status: string;
    };
    index: number;
    showStatus?: boolean;
  }

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-[#883FE0]/20 transition-all group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="h-48 bg-gray-700 relative overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white text-xs font-bold px-2 py-1 rounded">
          {project.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-[#883FE0] group-hover:to-[#FA8B8B] group-hover:bg-clip-text group-hover:text-transparent transition-colors">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
        <Link href={`/projects/${project.id}`}>
          <Button
            variant="outline"
            className="border-[#883FE0] bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-[#883FE0] hover:to-[#FA8B8B] hover:text-white w-full"
          >
            Learn More
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

