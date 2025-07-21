"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { AboutPageData } from "@/app/about/page"
import { urlFor } from "@/sanity/client"

// Updated interface to match Sanity data structure
interface TeamMember {
  _key: string;
  name: string;
  role: string;
  image: any;
  team: string;
}

// Member card component for rendering individual team members
// No styling changes here, only the image source is updated
function MemberCard({ member, index, isLeadership = false }: { member: TeamMember; index: number; isLeadership?: boolean }) {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <Card className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 overflow-hidden group hover:border-[#883FE0]/50 transition-all duration-300">
        <div className={`relative w-full overflow-hidden ${isLeadership ? 'h-64 md:h-80' : 'h-56'}`}>
          <Image
            src={urlFor(member.image).url()}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <CardContent className="p-5 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className={`${isLeadership ? 'text-xl' : 'text-lg'} font-bold group-hover:bg-gradient-to-r group-hover:from-[#883FE0] group-hover:to-[#FA8B8B] group-hover:bg-clip-text group-hover:text-transparent transition-colors`}>
              {member.name}
            </h3>
            <p className={`${isLeadership ? 'text-base' : 'text-sm'} text-gray-400`}>{member.role}</p>
          </motion.div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#883FE0] to-[#FA8B8B] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Team section component
// No styling changes here, only the key is updated for reliability
function TeamSection({ title, members }: { title: string; members: TeamMember[] }) {
  if (members.length === 0) return null;

  return (
    <section className="py-12">
      <div className="flex justify-center mb-8">
        <motion.h2
          className="text-3xl font-bold relative inline-block text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
          <motion.div
            className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#883FE0] to-[#FA8B8B]"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.h2>
      </div>
      
      {title === "Leadership" ? (
        <div className="flex flex-col md:flex-row justify-center gap-10 mb-10">
          {members.map((member, index) => (
            <div key={member._key} className="md:w-1/3 lg:w-1/4">
              <MemberCard member={member} index={index} isLeadership={true} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {members.map((member, index) => (
            <MemberCard key={member._key} member={member} index={index} />
          ))}
        </div>
      )}
    </section>
  )
}

// Main team component
// This now receives data as a prop and filters it
export default function OurTeam({ data }: { data: AboutPageData }) {
  if (!data.teamMembers || data.teamMembers.length === 0) {
    return null;
  }

  const leadershipTeam = data.teamMembers.filter(m => m.team === 'Leadership');
  const technicalTeam = data.teamMembers.filter(m => m.team === 'Technical Team');
  const creativeTeam = data.teamMembers.filter(m => m.team === 'Creative Team');

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our dedicated team of innovators, creators, and tech enthusiasts who are passionate about advancing the field of robotics.
          </p>
        </motion.div>

        <TeamSection title="Leadership" members={leadershipTeam} />
        <TeamSection title="Technical Team" members={technicalTeam} />
        <TeamSection title="Creative Team" members={creativeTeam} />
      </div>
    </section>
  )
}
