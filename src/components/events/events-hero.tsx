"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function EventsHero() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image src="/images/.png" alt="Background" fill className="object-cover" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-6">Events</h1>
          <p className="text-xl text-gray-300">
            Join us for workshops, competitions, and tech talks to enhance your robotics skills.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

