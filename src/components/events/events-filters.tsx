"use client"

import { motion } from "framer-motion"

interface EventsFiltersProps {
  categories: string[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}

export default function EventsFilters({ categories, selectedCategory, setSelectedCategory }: EventsFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === category ? "bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
          onClick={() => setSelectedCategory(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  )
}

