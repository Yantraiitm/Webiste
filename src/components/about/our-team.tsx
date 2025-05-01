"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Define the team member interface
interface TeamMember {
  name: string
  role: string
  image: string
}

// Team data grouped by roles
const leadershipTeam: TeamMember[] = [
  {
    name: "Akhilesh Bhagat",
    role: "Secretary",
    image: "/images/team/head.png",
  },
  {
    name: "Muskan Jadon",
    role: "Deputy Secretary",
    image: "/images/team/dep.png",
  },
]

const technicalTeam: TeamMember[] = [
  {
    name: "Arunya",
    role: "Instructor",
    image: "/images/team/aru.png",
  },
  {
    name: "Ayush Singh",
    role: "Guest Contributor",
    image: "/images/team/ayush.png",
  },
  {
    name: "Finny",
    role: "Mentor",
    image: "/images/team/finny.png",
  },
  {
    name: "Vivek",
    role: "Instructor",
    image: "/images/team/vivek.png",
  },
  {
    name: "Siddhant",
    role: "Contributor",
    image: "/images/team/sid.png",
  },
  {
    name: "Abhinav",
    role: "Instructor",
    image: "/images/team/arvindhan.jpeg",
  },
  {
    name: "Avinash",
    role: "Contributor",
    image: "/images/team/avinash.jpeg",
  },
  {
    name: "Ritika",
    role: "Contributor",
    image: "/images/team/ritika.png",
  },
  {
    name: "Soumya",
    role: "Contributor",
    image: "/images/team/soum.png",
  },
  {
    name: "Yash Tiwari",
    role: "Contributor",
    image: "/images/team/yash.png",
  },
  {
    name: "Kratika Jain",
    role: "Contributor",
    image: "/images/team/kra.png",
  },
]

const creativeTeam: TeamMember[] = [
  {
    name: "Vardhini Kumar",
    role: "Content Creator",
    image: "/images/team/vardhani.png",
  },
  {
    name: "Ankush Mishra",
    role: "Content Creator",
    image: "/images/team/ank.png",
  },
  {
    name: "Ishita Aggarwal",
    role: "Public Relations",
    image: "/images/team/isi.png",
  },
  {
    name: "Richa Verma",
    role: "Public Relations",
    image: "/images/team/richa.png",
  },
  {
    name: "Vipul",
    role: "Blogger",
    image: "/images/team/vipul.png",
  },
  {
    name: "Shikha",
    role: "Video Editor",
    image: "/images/team/shik.png",
  },
  {
    name: "Nitish Chandra Gosh",
    role: "Video Editor",
    image: "/images/team/niti.png",
  },
  {
    name: "Santosh Pasawan",
    role: "Video Editor",
    image: "/images/team/san.png",
  },
  {
    name: "Yashneel Borana",
    role: "Web Developer",
    image: "/images/team/yashn.png",
  },
  {
    name: "Sahil Chabra",
    role: "Web Developer",
    image: "/images/team/sahil.jpeg",
  },
  {
    name: "Srivalli",
    role: "Web Developer",
    image: "/images/team/siva.png",
  },
  {
    name: "Arvindhan",
    role: "Web Developer",
    image: "/images/team/arv.png",
  },
]

// Member card component for rendering individual team members
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
            src={member.image}
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
function TeamSection({ title, members }: { title: string; members: TeamMember[] }) {
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
            <div key={member.name} className="md:w-1/3 lg:w-1/4">
              <MemberCard member={member} index={index} isLeadership={true} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {members.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      )}
    </section>
  )
}

// Main team component
export default function OurTeam() {
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