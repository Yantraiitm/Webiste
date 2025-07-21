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

interface EventCardProps {
  event: Event
  index: number
  featured?: boolean
}

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function EventCard({ event, index, featured = false }: EventCardProps) {
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
  const formattedDate = eventDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const formattedTime = eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <Link href={`/events/${event.slug.current}`}>
      <motion.div
        className={`${featured ? "bg-black rounded-lg overflow-hidden shadow-lg" : "bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6"} cursor-pointer h-full flex flex-col`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
      >
        {featured && event.image && (
          <div className="relative h-48">
            <Image src={urlFor(event.image).url()} alt={event.title} fill className="object-cover" />
            <div className="absolute top-2 right-2 bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white text-xs font-bold px-2 py-1 rounded">
              {event.category}
            </div>
            <div className={`absolute bottom-2 left-2 bg-gradient-to-r ${getStatusColor(event.status)} text-white text-xs font-bold px-2 py-1 rounded`}>
              {getStatusText(event.status)}
            </div>
          </div>
        )}
        <div className={`${featured ? "p-6" : ""} flex-grow flex flex-col`}>
          <div className="bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] bg-clip-text text-transparent font-bold mb-2 flex items-center gap-2">
            <Calendar size={16} className="text-[#883FE0]" />
            {formattedDate}
          </div>
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <div className="flex items-center text-gray-400 mb-2">
            <Clock size={16} className="mr-2" />
            <span className="text-sm">{formattedTime}</span>
          </div>
          <div className="flex items-center text-gray-400 mb-4">
            <MapPin size={16} className="mr-2" />
            <span className="text-sm">{event.location}</span>
          </div>
          <p className="text-gray-400 mb-4 flex-grow">{event.description}</p>
          <div className="mt-auto">
            {featured ? (
              <Button className="w-full bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white hover:from-[#7F35CF] hover:to-[#F87878]">
                {event.status === 'past' ? 'View Details' : 'Register Now'}
              </Button>
            ) : (
              <Button variant="link" className="text-blue-400 p-0 hover:text-blue-300">
                {event.status === 'past' ? 'View Details' : 'Register Now'} →
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

