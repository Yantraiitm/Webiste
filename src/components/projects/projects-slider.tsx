"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { featuredProjects, FeaturedProject } from "@/data/projects"

export default function ProjectsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1))
  }

  return (
    <section className="bg-black">
      <div className="container mx-auto px-4">
        <div className="relative rounded-xl overflow-hidden">
          <div className="relative h-[80vh] w-full">
            {featuredProjects.length > 0 && (
              <>
                <Image
                  src={featuredProjects[currentSlide].images[0] || "/placeholder.svg"}
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
                <Link href={`/projects/${featuredProjects[currentSlide]?.id}`}>
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

