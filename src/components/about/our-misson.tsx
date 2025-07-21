"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { urlFor } from "@/sanity/client"
import { AboutPageData } from "@/app/about/page"

export default function OurMission({ data }: { data: AboutPageData }) {
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
            <h2 className="text-3xl font-bold mb-6">{data.missionTitle || "Our Mission"}</h2>
            <div className="prose prose-invert max-w-none">
              {data.missionContent && <PortableText value={data.missionContent} />}
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              {data.missionImage && (
                <Image
                  src={urlFor(data.missionImage).url()}
                  alt={data.missionTitle || "Robotics Lab"}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

