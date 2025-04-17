"use client"

import { motion } from "framer-motion"

interface ValueCardProps {
  value: {
    title: string
    value:string
    description: string
  }
  index: number
}

export default function ValueCard({ value = { title: "", value: "", description: "" }, index }: ValueCardProps) {
  return (
    <motion.div
      className="bg-black p-6 rounded-lg hover:shadow-lg hover:shadow-[#883FE0]/10 transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] bg-clip-text text-transparent">{value.title}</h3>
      <p className="text-gray-300">{value.description}</p>
    </motion.div>
  )
}

