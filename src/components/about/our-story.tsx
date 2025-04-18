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
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <p className="text-gray-300 mb-4">
              Yantra was founded in September 2024 by a small group of passionate individuals with a clear vision for innovation and exploration in robotics, driven by cutting-edge technology. At the time, we were part of the Saranda House clubs, where we began our journey with a shared curiosity and commitment to building something impactful.
            </p>
            <p className="text-gray-300 mb-4">
              The overwhelming response and enthusiasm from students quickly transformed our initiative into a growing community of robotics enthusiasts. Recognizing the momentum, we evolved into an autonomous society in January 2025. Since then, Yantra has actively reached out to institutions like the IITs and collaborated with industries to push the boundaries of robotics.
            </p>
            <p className="text-gray-300">
              Our journey has been marked by groundbreaking ideas, innovative projects, and a relentless pursuit of excellence. And this is just the beginning.
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
                src="/images/about-robo.png"
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

