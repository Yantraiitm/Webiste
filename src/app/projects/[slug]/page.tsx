// filepath: e:\code\code\iitm\Webiste\src\app\projects\[slug]\page.tsx
"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { client } from "@/sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export interface Project {
  _id: string;
  title: string;
  author: string;
  description: string;
  images: any[];
  category: string;
  status: string;
  slug: { current: string };
}

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function ProjectPage() {
  const { slug } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchProject = async () => {
      setIsLoading(true);
      const query = `*[_type == "project" && slug.current == $slug][0]`;
      const sanityProject = await client.fetch<Project>(query, { slug });

      if (sanityProject) {
        setProject(sanityProject);
      } else {
        notFound();
      }
      setIsLoading(false);
    };

    fetchProject();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (!project) {
    return notFound();
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
            src={project.images[0] ? urlFor(project.images[0]).url() : "/placeholder.svg"}
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
                key={(image._key as string) || index}
                className="aspect-square relative rounded-xl overflow-hidden hover:shadow-lg hover:shadow-[#883FE0]/20 transition-all"
              >
                <Image
                  src={urlFor(image).url()}
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