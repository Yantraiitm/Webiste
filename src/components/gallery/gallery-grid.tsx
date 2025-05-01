"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"
import GalleryFilters from "@/components/gallery/gallery-filters"
import GalleryItem from "@/components/gallery/gallery-item"

// Gallery data using local images from public/images/gallery
const galleryItems = [
  {
    id: 1,
    title: "Club",
    category: "Club",
    image: "/images/gallery/Club.png",
  },
  {
    id: 2,
    title: "DH-Parameter Workshop",
    category: "Workshops",
    image: "/images/gallery/DH-Parameter(workshop).png",
  },
  {
    id: 3,
    title: "Microcontroller",
    category: "Projects",
    image: "/images/gallery/Microcontroller .png",
  },
  {
    id: 4,
    title: "Microcontroller by Livin",
    category: "Projects",
    image: "/images/gallery/Microcontroller-by-livin .png",
  },
  {
    id: 5,
    title: "Orientation Interaction",
    category: "Events",
    image: "/images/gallery/Orientation(Intraction).png",
  },
  {
    id: 6,
    title: "ROS Workshop",
    category: "Workshops",
    image: "/images/gallery/ROS(workshop).png",
  },
  {
    id: 7,
    title: "Student Project",
    category: "Projects",
    image: "/images/gallery/Student-Project(project).png",
  },
]

// Categories for filtering based on available images
const categories = ["All", "Club", "Events", "Workshops", "Projects"]

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Category Filters */}
        <GalleryFilters
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <GalleryItem key={item.id} item={item} onClick={() => setSelectedImage(item.id)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <X size={24} />
            </button>

            <div className="relative w-full max-w-4xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={galleryItems.find((item) => item.id === selectedImage)?.image || ""}
                alt={galleryItems.find((item) => item.id === selectedImage)?.title || ""}
                width={1200}
                height={800}
                className="object-contain w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                <h3 className="text-white font-bold text-xl">
                  {galleryItems.find((item) => item.id === selectedImage)?.title}
                </h3>
                <p className="text-gray-300">{galleryItems.find((item) => item.id === selectedImage)?.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

