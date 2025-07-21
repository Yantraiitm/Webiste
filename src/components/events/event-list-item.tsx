"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import { client } from "@/sanity/client"
import imageUrlBuilder from '@sanity/image-url'

// Use the Sanity Event interface
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

interface EventListItemProps {
  event: Event
  index: number
}

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function EventListItem({ event, index }: EventListItemProps) {
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'past':
        return 'from-gray-500 to-gray-700';
      case 'ongoing':
        return 'from-green-500 to-green-700';
      case 'upcoming':
        return 'from-blue-500 to-blue-700';
      default:
        return 'from-gray-500 to-gray-700';
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case 'past':
        return 'Past Event';
      case 'ongoing':
        return 'Happening Now';
      case 'upcoming':
        return 'Coming Soon';
      default:
        return '';
    }
  };

  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  const formattedTime = eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  
  return (
    <Link href={`/events/${event.slug.current}`}>
      <motion.div
        className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 relative h-48 md:h-auto">
            <Image src={event.image ? urlFor(event.image).url() : "/placeholder.svg"} alt={event.title} fill className="object-cover" />
            <div className={`absolute bottom-2 left-2 bg-gradient-to-r ${getStatusColor(event.status)} text-white text-xs font-bold px-2 py-1 rounded`}>
              {getStatusText(event.status)}
            </div>
          </div>
          <div className="p-6 md:w-3/4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <span className="inline-block bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white text-xs font-bold px-2 py-1 rounded mb-2 md:mb-0">
                  {event.category}
                </span>
                <h3 className="text-xl font-bold">{event.title}</h3>
              </div>
              <div className="flex items-center mt-2 md:mt-0">
                <Calendar size={16} className="mr-2 text-[#883FE0]" />
                <span className="text-sm text-gray-300">{formattedDate}</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">{event.description}</p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-0">
                <div className="flex items-center text-gray-400">
                  <Clock size={16} className="mr-2" />
                  <span className="text-sm">{formattedTime}</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin size={16} className="mr-2" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white hover:from-[#7F35CF] hover:to-[#F87878]">
                {event.status === 'past' ? 'View Details' : 'Register Now'}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

