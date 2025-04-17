"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

interface EventCardProps {
  event: {
    id: number
    title: string
    description: string
    date: string
    time?: string
    location: string
    image?: string
    category: string
  }
  index: number
  featured?: boolean
}

export default function EventCard({ event, index, featured = false }: EventCardProps) {
  return (
    <motion.div
      className={`${featured ? "bg-black rounded-lg overflow-hidden shadow-lg" : "bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6"}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      {featured && event.image && (
        <div className="relative h-48">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
          <div className="absolute top-2 right-2 bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white text-xs font-bold px-2 py-1 rounded">
            {event.category}
          </div>
        </div>
      )}
      <div className={featured ? "p-6" : ""}>
        <div className="bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] bg-clip-text text-transparent font-bold mb-2 flex items-center gap-2">
          <Calendar size={16} className="text-[#883FE0]" />
          {event.date}
        </div>
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        {event.time && (
          <div className="flex items-center text-gray-400 mb-2">
            <Clock size={16} className="mr-2" />
            <span className="text-sm">{event.time}</span>
          </div>
        )}
        <div className="flex items-center text-gray-400 mb-4">
          <MapPin size={16} className="mr-2" />
          <span className="text-sm">{event.location}</span>
        </div>
        <p className="text-gray-400 mb-4">{event.description}</p>
        <Link href={`/events/${event.id}`}>
          {featured ? (
            <Button className="w-full bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white hover:from-[#7F35CF] hover:to-[#F87878]">Register Now</Button>
          ) : (
            <Button variant="link" className="text-blue-400 p-0 hover:text-blue-300">
              Register Now →
            </Button>
          )}
        </Link>
      </div>
    </motion.div>
  )
}

