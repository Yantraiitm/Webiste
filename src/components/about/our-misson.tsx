"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function OurMission() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              At Yantra, our mission is to foster innovation in robotics and AI by creating a collaborative environment
              where ideas can flourish and transform into reality.
            </p>
            <p className="text-gray-300 mb-4">
              We aim to bridge the gap between theoretical knowledge and practical applications, equipping our members
              with the skills and experience needed to excel in the rapidly evolving field of robotics.
            </p>
            <p className="text-gray-300">
              Through workshops, competitions, and research projects, we strive to push the boundaries of what's
              possible and inspire the next generation of robotics engineers and enthusiasts.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1538491247542-5da27794bc65?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Robotics Lab"
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

