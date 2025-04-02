"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function OurStory() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2018, Yantra began as a small group of passionate engineering students with a shared vision: to
              explore the frontiers of robotics and artificial intelligence.
            </p>
            <p className="text-gray-300 mb-4">
              What started as informal meetups in a university lab has grown into one of the most innovative robotics
              clubs, with members from diverse backgrounds and expertise.
            </p>
            <p className="text-gray-300">
              Today, Yantra stands at the intersection of cutting-edge research and practical applications, creating
              solutions that address real-world challenges through the power of robotics.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1589254065909-b7086229d08c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Yantra Team"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

