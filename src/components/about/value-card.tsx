"use client"

import { motion } from "framer-motion"

interface ValueCardProps {
  value: {
    title: string
    description: string
  }
  index: number
}

export default function ValueCard({ value, index }: ValueCardProps) {
  return (
    <motion.div
      className="bg-black p-6 rounded-lg hover:shadow-lg hover:shadow-orange-500/10 transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-bold mb-3 text-orange-500">{value.title}</h3>
      <p className="text-gray-300">{value.description}</p>
    </motion.div>
  )
}

