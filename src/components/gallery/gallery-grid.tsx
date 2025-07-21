"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"
import GalleryFilters from "@/components/gallery/gallery-filters"
import GalleryItem from "@/components/gallery/gallery-item"
import { client } from "@/sanity/client"
import imageUrlBuilder from '@sanity/image-url'

export interface GalleryImage {
  _id: string;
  title: string;
  category: string;
  image: any;
}

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function GalleryGrid() {
  const [allImages, setAllImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      const query = `*[_type == "galleryImage"]{_id, title, category, image} | order(_createdAt desc)`;
      const sanityImages = await client.fetch<GalleryImage[]>(query);
      setAllImages(sanityImages);
      setIsLoading(false);
    };
    fetchImages();
  }, []);

  const categories = ["All", ...Array.from(new Set(allImages.map((item) => item.category)))];

  const filteredItems =
    selectedCategory === "All" ? allImages : allImages.filter((item) => item.category === selectedCategory);

  const selectedItem = allImages.find((item) => item._id === selectedImageId);

  if (isLoading) {
    return (
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 text-center py-16">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading Gallery...</p>
        </div>
      </section>
    );
  }

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
              <GalleryItem key={item._id} item={item} onClick={() => setSelectedImageId(item._id)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageId(null)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageId(null);
              }}
            >
              <X size={24} />
            </button>

            <div className="relative w-full max-w-4xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={urlFor(selectedItem.image).url()}
                alt={selectedItem.title}
                width={1200}
                height={800}
                className="object-contain w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                <h3 className="text-white font-bold text-xl">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-300">{selectedItem.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

