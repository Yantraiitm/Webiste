"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { client } from "@/sanity/client"
import imageUrlBuilder from '@sanity/image-url'

export interface Project {
  _id: string;
  title: string;
  images: any[];
  slug: { current: string };
}

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function ProjectsSlider() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      setIsLoading(true);
      const query = `*[_type == "project" && featured == true]{_id, title, images, slug}[0...5]`;
      const sanityProjects = await client.fetch<Project[]>(query);
      setFeaturedProjects(sanityProjects);
      setIsLoading(false);
    };
    fetchFeaturedProjects();
  }, []);

  const nextSlide = () => {
    if (featuredProjects.length === 0) return;
    setCurrentSlide((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (featuredProjects.length === 0) return;
    setCurrentSlide((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };

  if (isLoading) {
    return (
      <section className="bg-black">
        <div className="container mx-auto px-4">
          <div className="relative rounded-xl overflow-hidden">
            <div className="relative h-[80vh] w-full bg-gray-900 flex items-center justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (featuredProjects.length === 0) {
    return null; // Don't render the slider if there are no featured projects
  }

  return (
    <section className="bg-black">
      <div className="container mx-auto px-4">
        <div className="relative rounded-xl overflow-hidden">
          <div className="relative h-[80vh] w-full">
            {featuredProjects.length > 0 && (
              <>
                <Image
                  src={urlFor(featuredProjects[currentSlide].images[0]).url()}
                  alt={featuredProjects[currentSlide].title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Purple overlay for the image */}
                <div className="absolute inset-0 bg-purple-900/30 mix-blend-multiply"></div>
              </>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-12">
              <motion.h2
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl font-bold mb-6 max-w-3xl"
              >
                {featuredProjects[currentSlide]?.title || "Featured Project"}
              </motion.h2>
              
              <motion.div
                key={`button-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8"
              >
                <Link href={`/projects/${featuredProjects[currentSlide]?.slug.current}`}>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    View Project
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Project indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

