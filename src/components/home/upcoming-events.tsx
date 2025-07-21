"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/ui/section-heading"
import EventCard, { Event } from "@/components/events/event-card"
import { client } from "@/sanity/client"

export default function UpcomingEvents() {
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      setIsLoading(true)
      const query = `*[_type == "event" && status == "upcoming"]{
        _id, title, description, date, location, image, category, status, slug
      } | order(date asc)[0...3]`
      const sanityEvents = await client.fetch<Event[]>(query)
      setUpcomingEvents(sanityEvents)
      setIsLoading(false)
    }
    fetchUpcomingEvents()
  }, [])

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

        {isLoading ? (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
          </div>
        ) : upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={event._id} event={event} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-lg text-gray-400">No upcoming events at the moment. Check back soon!</p>
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

