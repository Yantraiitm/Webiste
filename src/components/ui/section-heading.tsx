"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  description: string
}

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-4 relative inline-block">
        {title}
        <motion.div
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#883FE0] to-[#FA8B8B]"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        />
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
    </motion.div>
  )
}

