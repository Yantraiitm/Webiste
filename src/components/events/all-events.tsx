"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import EventsFilters from "@/components/events/events-filters"
import EventListItem from "@/components/events/event-list-item"

// Sample events data
const events = [
  {
    id: 1,
    title: "Robotics Workshop 2025",
    description: "Learn the fundamentals of robotics and build your own robot in this hands-on workshop.",
    date: "April 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Main Campus, Engineering Building",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Workshop",
    featured: true,
  },
  {
    id: 2,
    title: "AI in Robotics Seminar",
    description: "Explore the intersection of artificial intelligence and robotics with industry experts.",
    date: "April 22, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Virtual Event",
    image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Seminar",
    featured: false,
  },
  {
    id: 3,
    title: "Annual Robotics Competition",
    description: "Showcase your robotics skills and compete for prizes in our annual competition.",
    date: "May 5-7, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "University Stadium",
    image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Competition",
    featured: true,
  },
  {
    id: 4,
    title: "Industry Connect: Robotics in Manufacturing",
    description: "Network with industry professionals and learn about robotics applications in manufacturing.",
    date: "May 15, 2025",
    time: "3:00 PM - 7:00 PM",
    location: "Innovation Center",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Networking",
    featured: false,
  },
  {
    id: 5,
    title: "Drone Programming Workshop",
    description: "Learn how to program and control drones for various applications.",
    date: "May 25, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Outdoor Field, East Campus",
    image: "https://images.unsplash.com/photo-1610461853808-0c0bf780a7c6?q=80&w=2093&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Workshop",
    featured: false,
  },
  {
    id: 6,
    title: "Robotics Hackathon",
    description: "48-hour hackathon to build innovative robotics solutions for real-world problems.",
    date: "June 10-12, 2025",
    time: "Starts at 9:00 AM",
    location: "Innovation Hub",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Hackathon",
    featured: true,
  },
]

// Categories for filtering
const categories = ["All", "Workshop", "Seminar", "Competition", "Networking", "Hackathon"]

export default function AllEvents() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredEvents =
    selectedCategory === "All" ? events : events.filter((event) => event.category === selectedCategory)

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Browse all our upcoming events and register to participate.</p>
        </motion.div>

        {/* Category Filters */}
        <EventsFilters
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Events List */}
        <div className="space-y-6">
          {filteredEvents.map((event, index) => (
            <EventListItem key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

