"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import EventsFilters from "@/components/events/events-filters"
import EventListItem from "@/components/events/event-list-item"
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

// Categories for filtering
const categories = ["All", "Workshop", "Seminar", "Competition", "Lecture", "Hackathon", "Orientation"]
const statuses = ["All", "past", "ongoing", "upcoming"]

export default function AllEvents() {
  const [allEvents, setAllEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true)
      const query = `*[_type == "event"]{
        _id, title, description, date, location, image, category, status, slug
      } | order(date desc)`
      const sanityEvents = await client.fetch<Event[]>(query)
      setAllEvents(sanityEvents)
      setIsLoading(false)
    }
    fetchEvents()
  }, [])

  const filteredEvents = allEvents.filter(event => {
    const categoryMatch = selectedCategory === "All" || event.category === selectedCategory;
    const statusMatch = selectedStatus === "All" || event.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center py-16">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading Events...</p>
        </div>
      </section>
    )
  }

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
          <h2 className="text-3xl font-bold mb-4">All Events</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Browse all our events and register to participate.</p>
        </motion.div>

        {/* Category Filters */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3 text-center">Filter by Category</h3>
          <EventsFilters
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        {/* Status Filters */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-3 text-center">Filter by Status</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedStatus === status
                    ? "bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {status === "All" ? "All Statuses" : status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <EventListItem key={event._id} event={event} index={index} />
            ))
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No events found matching your filters.</p>
              <button 
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedStatus("All");
                }}
                className="mt-4 text-purple-400 hover:text-purple-300"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

