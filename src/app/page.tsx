"use client"

import Hero from "@/components/home/hero-section"
import FeaturedProjects from "@/components/home/featured-projects"
import UpcomingEvents from "@/components/home/upcoming-events"
import LatestBlogs from "@/components/home/latest-blogs"
import JoinCTA from "@/components/home/joint-cta"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero/>
      <FeaturedProjects />
      <UpcomingEvents />
      <LatestBlogs />
      <JoinCTA />
    </div>
  )
}

