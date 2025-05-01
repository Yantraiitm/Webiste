"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/ui/section-heading"
import EventCard from "@/components/events/event-card"
import eventsData from "@/data/events.json"

// Get the 3 latest upcoming events
const getUpcomingEvents = () => {
  return eventsData.events
    .filter(event => event.status === "upcoming")
    .sort((a, b) => {
      // Sort by date (convert to Date objects for proper comparison)
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
    .slice(0, 3)
}

const upcomingEvents = getUpcomingEvents()

export default function UpcomingEvents() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-60">
        <Image src="/images/abstract.png" alt="Background" fill className="object-cover" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="Upcoming Events"
          description="Join us for workshops, competitions, and tech talks to enhance your robotics skills."
        />

        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-lg text-gray-600">No upcoming events at the moment. Check back soon!</p>
          </div>
        )}

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/events">
            <Button className="bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white hover:from-[#7F35CF] hover:to-[#F87878] px-8">View All Events</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

