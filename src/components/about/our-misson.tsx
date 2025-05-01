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
              At Yantra, our mission is to bridge the gap between theoretical knowledge and practical application in the field of robotics by fostering hands-on projects, active mentorship, and exposure to cutting-edge technologies.
            </p>
            <p className="text-gray-300 mb-4">
              We aim to cultivate an inclusive and dynamic environment where innovation thrives and students are empowered to transform their ideas into impactful, real-world solutions.
            </p>
            <p className="text-gray-300">
              Through collaboration, continuous learning, and interdisciplinary engagement, we strive to prepare our members to lead and contribute meaningfully to the rapidly evolving landscape of robotics and automation.
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
                src="/images/about-us-robo.webp"
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

