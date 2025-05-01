"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProjectsFilters from "@/components/projects/projects-filters"
import ProjectCard from "@/components/projects/project-card"
import { projects } from "@/data/projects"

// Extract unique categories from projects
const uniqueCategories = Array.from(new Set(projects.map((project) => project.category)));
const allCategories = ["All", ...uniqueCategories];

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
          categories={allCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              showStatus={true}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

