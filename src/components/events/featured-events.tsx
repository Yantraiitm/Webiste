"use client"

import { motion } from "framer-motion"
import EventCard from "@/components/events/event-card"

// Sample featured events data
const featuredEvents = [
  {
    id: 1,
    title: "Robotics Workshop 2025",
    description: "Learn the fundamentals of robotics and build your own robot in this hands-on workshop.",
    date: "April 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Main Campus, Engineering Building",
    image: "https://images.unsplash.com/photo-1589254065909-b7086229d08c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Workshop",
    featured: true,
  },
  {
    id: 2,
    title: "Annual Robotics Competition",
    description: "Showcase your robotics skills and compete for prizes in our annual competition.",
    date: "May 5-7, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "University Stadium",
    image: "https://images.unsplash.com/photo-1538491247542-5da27794bc65?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Competition",
    featured: true,
  },
  {
    id: 3,
    title: "Robotics Hackathon",
    description: "48-hour hackathon to build innovative robotics solutions for real-world problems.",
    date: "June 10-12, 2025",
    time: "Starts at 9:00 AM",
    location: "Innovation Hub",
    image: "https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Hackathon",
    featured: true,
  },
]

export default function FeaturedEvents() {
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

