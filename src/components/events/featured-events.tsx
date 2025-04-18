"use client"

import { motion } from "framer-motion"
import EventCard from "@/components/events/event-card"
import eventsData from "@/data/events.json"

export default function FeaturedEvents() {
  // Filter for featured events only
  const featuredEvents = eventsData.events.filter(event => event.featured);

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
            <EventCard key={event.id} event={event} index={index} featured={true} />
          ))}
        </div>
      </div>
    </section>
  )
}

