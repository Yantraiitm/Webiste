"use client";

import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectPage() {
  const pathname = usePathname();
  const projectId = pathname.split("/").pop();
  const project = projects.find((p) => p.id.toString() === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <p className="text-gray-300 mb-8">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/projects"
          className="flex items-center text-[#883FE0] hover:text-[#FA8B8B] transition-colors"
        >
          <ChevronLeft size={20} /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-[#883FE0] hover:text-[#FA8B8B] transition-colors mb-8"
        >
          <ChevronLeft size={20} /> Back to Projects
        </Link>

        {/* Project header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 mb-2">By {project.author}</p>
          <div className="flex items-center">
            <span className="bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white text-sm font-medium px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="ml-3 text-gray-400 text-sm">
              Status: {project.status}
            </span>
          </div>
        </motion.div>

        {/* Main image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative aspect-video w-full rounded-xl overflow-hidden mb-12"
        >
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Project description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">About this project</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {project.description}
          </p>
        </motion.div>

        {/* Image gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="aspect-square relative rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#883FE0]/20 transition-all"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}