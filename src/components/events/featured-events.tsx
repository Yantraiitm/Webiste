"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import EventCard from "@/components/events/event-card"
import { client } from "@/sanity/client"

export interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image?: any;
  category: string;
  status: 'past' | 'ongoing' | 'upcoming';
  slug: { current: string };
}

export default function FeaturedEvents() {
  const [featuredEvents, setFeaturedEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchFeaturedEvents = async () => {
      setIsLoading(true)
      const query = `*[_type == "event" && featured == true]{
        _id, title, description, date, location, image, category, status, slug
      } | order(date desc)[0...3]`
      const sanityEvents = await client.fetch<Event[]>(query)
      setFeaturedEvents(sanityEvents)
      setIsLoading(false)
    }
    fetchFeaturedEvents()
  }, [])

  if (isLoading) {
    return (
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
        </div>
      </section>
    )
  }

  if (featuredEvents.length === 0) {
    return null; // Don't render if no featured events
  }

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Events
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event, index) => (
            <EventCard key={event._id} event={event} index={index} featured={true} />
          ))}
        </div>
      </div>
    </section>
  )
}

