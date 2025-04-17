"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/ui/section-heading"
import EventCard from "@/components/events/event-card"

// Sample events data
const upcomingEvents = [
  {
    id: 1,
    title: "Robotics Workshop",
    date: "April 15, 2025",
    location: "Main Campus",
    description: "Learn the fundamentals of robotics and build your own robot in this hands-on workshop.",
    category: "Workshop",
  },
  {
    id: 2,
    title: "AI in Robotics Seminar",
    date: "April 22, 2025",
    location: "Virtual",
    description: "Explore the intersection of artificial intelligence and robotics with industry experts.",
    category: "Seminar",
  },
  {
    id: 3,
    title: "Robotics Competition",
    date: "May 5, 2025",
    location: "Engineering Building",
    description: "Showcase your robotics skills and compete for prizes in our annual competition.",
    category: "Competition",
  },
]

export default function UpcomingEvents() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image src="/images/BACKGROUND-IMAGE.png" alt="Background" fill className="object-cover" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="Upcoming Events"
          description="Join us for workshops, competitions, and tech talks to enhance your robotics skills."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

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

