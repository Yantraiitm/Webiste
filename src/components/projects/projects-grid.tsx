"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProjectsFilters from "@/components/projects/projects-filters"
import ProjectCard from "@/components/projects/project-card"

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Autonomous Drone",
    description: "A drone that can navigate and perform tasks without human intervention using computer vision and AI.",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Robotics",
    status: "Completed",
  },
  {
    id: 2,
    title: "Smart Agriculture Robot",
    description: "An agricultural robot that can monitor crop health, soil conditions, and automate irrigation.",
    image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Agriculture",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Medical Assistant Robot",
    description: "A robot designed to assist healthcare professionals in routine tasks and patient monitoring.",
    image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Healthcare",
    status: "Completed",
  },
  {
    id: 4,
    title: "Underwater Exploration Bot",
    description: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Marine",
    status: "In Progress",
  },
  {
    id: 5,
    title: "Home Security System",
    description: "An integrated security system with facial recognition and anomaly detection.",
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Security",
    status: "Completed",
  },
  {
    id: 6,
    title: "Industrial Automation Arm",
    description: "A robotic arm designed for precision manufacturing and assembly line operations.",
    image: "https://images.unsplash.com/photo-1606206873764-fd15e242df52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Industrial",
    status: "In Progress",
  },
]

// Categories for filtering
const categories = ["All", "Robotics", "Agriculture", "Healthcare", "Marine", "Security", "Industrial"]

export default function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our innovative robotics projects that push the boundaries of technology and imagination.
          </p>
        </motion.div>

        {/* Category Filters */}
        <ProjectsFilters
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={{
                ...project,
                image: project.image || "https://placehold.co/600x400/333/FFF?text=No+Image",
                category: project.category,
              }}
              index={index}
              showStatus={true}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

