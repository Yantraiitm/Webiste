"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { urlFor } from "@/sanity/client"
import { AboutPageData } from "@/app/about/page"

export default function OurStory({ data }: { data: AboutPageData }) {
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
            <h2 className="text-3xl font-bold mb-6">{data.storyTitle || "Our Journey"}</h2>
            <div className="prose prose-invert max-w-none">
              {data.storyContent && <PortableText value={data.storyContent} />}
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              {data.storyImage && (
                <Image
                  src={urlFor(data.storyImage).url()}
                  alt={data.storyTitle || "Yantra Team"}
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

