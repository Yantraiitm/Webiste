"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SectionHeading from "@/components/ui/section-heading"
import ProjectCard from "@/components/projects/project-card"

// Sample featured projects data
const featuredProjects = [
  {
    id: 1,
    title: "Autonomous Drone",
    description: "A drone that can navigate and perform tasks without human intervention using computer vision and AI.",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Robotics",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Smart Agriculture Robot",
    description: "An agricultural robot that can monitor crop health, soil conditions, and automate irrigation.",
    image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Agriculture",
    status: "Completed",
  },
  {
    id: 3,
    title: "Medical Assistant Robot",
    description: "A robot designed to assist healthcare professionals in routine tasks and patient monitoring.",
    image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Healthcare",
    status: "Prototype",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <SectionHeading
          title="Featured Projects"
          description="Explore our innovative robotics projects that push the boundaries of technology and imagination."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/projects">
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8"
            >
              View All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

