"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { client } from "@/sanity/client"
import imageUrlBuilder from '@sanity/image-url'

interface GalleryItemProps {
  item: {
    _id: string;
    title: string;
    category: string;
    image: any;
  }
  onClick: () => void
}

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function GalleryItem({ item, onClick }: GalleryItemProps) {
  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      whileHover={{ y: -5 }}
    >
      <div className="aspect-square relative">
        <Image
          src={item.image ? urlFor(item.image).url() : "/placeholder.svg"}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-bold">{item.title}</h3>
        <p className="text-gray-300 text-sm">{item.category}</p>
      </div>
    </motion.div>
  )
}

