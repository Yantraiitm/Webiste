"use client"

import { useEffect, useState } from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ArrowLeft } from "lucide-react"
import { client } from "@/sanity/client"
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image?: any;
  category: string;
  status: 'past' | 'ongoing' | 'upcoming';
  slug: { current: string };
  body?: any[];
}

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export default function EventDetailPage() {
  const { slug } = useParams();
  const [event, setEvent] = useState<Event | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!slug) return;
    
    const fetchEvent = async () => {
      setIsLoading(true);
      const query = `*[_type == "event" && slug.current == $slug][0]`;
      const foundEvent = await client.fetch<Event>(query, { slug });
      
      if (foundEvent) {
        setEvent(foundEvent);
      } else {
        notFound();
      }
      
      setIsLoading(false);
    }
    fetchEvent();
  }, [slug])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (!event) {
    return notFound();
  }

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
  const formattedDate = eventDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const formattedTime = eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Event Image */}
      <div className="relative h-96">
        <Image 
          src={event.image ? urlFor(event.image).url() : "/images/abstract.png"} 
          alt={event.title} 
          fill 
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-10 relative z-10">
          <Link href="/events" className="flex items-center text-gray-300 hover:text-white mb-8 transition">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Events
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-block bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white text-sm font-bold px-3 py-1 rounded">
                  {event.category}
                </span>
                <span className={`inline-block bg-gradient-to-r ${getStatusColor(event.status)} text-white text-sm font-bold px-3 py-1 rounded`}>
                  {getStatusText(event.status)}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{event.title}</h1>
            </div>
            
            {event.status !== 'past' && (
              <Button size="lg" className="bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white hover:from-[#7F35CF] hover:to-[#F87878]">
                Register Now
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Event Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">About This Event</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-8">{event.description}</p>
              
              {/* You can add more content here like event agenda, speakers, etc. */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">What You'll Learn</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Understand the core principles of {event.title.toLowerCase()}</li>
                  <li>Gain hands-on experience with industry-standard tools and techniques</li>
                  <li>Network with professionals and peers in the robotics community</li>
                  <li>Apply your knowledge to real-world challenges and projects</li>
                </ul>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Who Should Attend</h3>
                <p className="text-gray-300">
                  This event is perfect for students, researchers, and professionals interested in robotics, 
                  particularly those looking to enhance their skills in {event.category.toLowerCase()}. 
                  No prior experience is required for beginners' sessions.
                </p>
              </div>
            </div>
          </div>
          
          {/* Event Information Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Event Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="mt-1 mr-3 text-[#883FE0]" />
                  <div>
                    <p className="font-medium">Date</p>
                    <p className="text-gray-400">{formattedDate}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="mt-1 mr-3 text-[#883FE0]" />
                  <div>
                    <p className="font-medium">Time</p>
                    <p className="text-gray-400">{formattedTime}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mt-1 mr-3 text-[#883FE0]" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-400">{event.location}</p>
                  </div>
                </div>
              </div>
              
              {event.status !== 'past' && (
                <Button className="w-full mt-8 bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] text-white hover:from-[#7F35CF] hover:to-[#F87878]">
                  Register Now
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}