"use client"

import { motion } from "framer-motion"
import ValueCard from "@/components/about/value-card"

// Sample values data
const values = [
  {
    title: "Innovation",
    description: "We embrace creativity and forward-thinking approaches to solve complex problems.",
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and diverse perspectives to achieve extraordinary results.",
  },
  {
    title: "Excellence",
    description: "We strive for the highest standards in everything we do, from code to hardware.",
  },
  {
    title: "Inclusivity",
    description: "We welcome members from all backgrounds, believing diversity strengthens our community.",
  },
  { title: "Learning", description: "We foster a culture of continuous learning and knowledge sharing." },
  { title: "Impact", description: "We focus on creating solutions that make a meaningful difference in the world." },
]

export default function OurValues() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            These principles guide everything we do at Yantra, from our day-to-day operations to our long-term vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

