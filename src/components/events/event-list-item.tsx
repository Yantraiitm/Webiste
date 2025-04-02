"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

interface EventListItemProps {
  event: {
    id: number
    title: string
    description: string
    date: string
    time: string
    location: string
    image: string
    category: string
  }
  index: number
}

export default function EventListItem({ event, index }: EventListItemProps) {
  return (
    <motion.div
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 relative h-48 md:h-auto">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        </div>
        <div className="p-6 md:w-3/4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <span className="inline-block bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded mb-2 md:mb-0">
                {event.category}
              </span>
              <h3 className="text-xl font-bold">{event.title}</h3>
            </div>
            <div className="flex items-center mt-2 md:mt-0">
              <Calendar size={16} className="mr-2 text-orange-500" />
              <span className="text-sm text-gray-300">{event.date}</span>
            </div>
          </div>
          <p className="text-gray-400 mb-4">{event.description}</p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-0">
              <div className="flex items-center text-gray-400">
                <Clock size={16} className="mr-2" />
                <span className="text-sm">{event.time}</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                <span className="text-sm">{event.location}</span>
              </div>
            </div>
            <Link href={`/events/${event.id}`}>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Register Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

