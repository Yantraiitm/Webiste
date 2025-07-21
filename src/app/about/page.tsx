"use client"

import { useState, useEffect } from "react"
import AboutHero from "@/components/about/about-hero"
import OurStory from "@/components/about/our-story"
import OurMission from "@/components/about/our-misson"
import OurValues from "@/components/about/our-values"
import OurTeam from "@/components/about/our-team"
import { client } from "@/sanity/client"

export interface AboutPageData {
  storyTitle?: string;
  storyContent?: any[];
  storyImage?: any;
  missionTitle?: string;
  missionContent?: any[];
  missionImage?: any;
  values?: { _key: string; title: string; description: string }[];
  teamMembers?: { _key: string; name: string; role: string; image: any; team: string }[];
}

export default function AboutPage() {
  const [aboutData, setAboutData] = useState<AboutPageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      setIsLoading(true);
      const query = `*[_type == "aboutPage"][0]`;
      const data = await client.fetch<AboutPageData>(query);
      setAboutData(data);
      setIsLoading(false);
    };
    fetchAboutData();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div>
      <AboutHero />
      {aboutData && (
        <>
          <OurStory data={aboutData} />
          <OurMission data={aboutData} />
          <OurValues data={aboutData} />
          <OurTeam data={aboutData} />
        </>
      )}
    </div>
  )
}

