"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HomePageData } from "@/app/page"

export default function JoinCTA({ data }: { data: HomePageData | null }) {
  return (
    <section className="py-20 bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-2/3 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {data?.ctaTitle || "Ready to join the future of robotics?"}
            </h2>
            <p className="text-white/80 max-w-2xl">
              {data?.ctaDescription ||
                "Become a member of Yantra Robotics Club and get access to workshops, events, resources, and a community of like-minded innovators."}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/login">
              <Button className="bg-white hover:bg-gray-100 hover:from-[#7F35CF] hover:to-[#F87878] hover:text-white bg-gradient-to-r from-white to-white bg-clip-text text-transparent px-8 py-6 text-lg font-bold">
                {data?.ctaButtonText || "Join Yantra Today"}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

