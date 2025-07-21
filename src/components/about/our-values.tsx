"use client"

import { motion } from "framer-motion"
import ValueCard from "@/components/about/value-card"
import { AboutPageData } from "@/app/about/page"

export default function OurValues({ data }: { data: AboutPageData }) {
  if (!data.values || data.values.length === 0) {
    return null
  }

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
          {data.values.map((value, index) => (
            <ValueCard key={value._key} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

