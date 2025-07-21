"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/home/hero-section"
import FeaturedProjects from "@/components/home/featured-projects"
import UpcomingEvents from "@/components/home/upcoming-events"
import LatestBlogs from "@/components/home/latest-blogs"
import JoinCTA from "@/components/home/joint-cta"
import { client } from "@/sanity/client"

export interface HomePageData {
  heroTitle?: string;
  heroSubtitle?: string;
  heroButtonText?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
}

export default function Home() {
  const [homeData, setHomeData] = useState<HomePageData | null>(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      const query = `*[_type == "homePage"][0]`;
      const data = await client.fetch<HomePageData>(query);
      setHomeData(data);
    };
    fetchHomeData();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Hero/>
      <FeaturedProjects />
      <UpcomingEvents />
      <LatestBlogs />
      <JoinCTA data={homeData} />
    </div>
  )
}

