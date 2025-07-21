"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProjectsFilters from "@/components/projects/projects-filters"
import ProjectCard from "@/components/projects/project-card"
import { client } from "@/sanity/client"

export interface Project {
  _id: string;
  title: string;
  author: string;
  description: string;
  images: any[];
  category: string;
  status: string;
  slug: { current: string };
}

export default function ProjectsGrid() {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      const query = `*[_type == "project"]{_id, title, author, description, images, category, status, slug} | order(_createdAt desc)`;
      const sanityProjects = await client.fetch<Project[]>(query);
      setAllProjects(sanityProjects);
      setIsLoading(false);
    };
    fetchProjects();
  }, []);

  const uniqueCategories = Array.from(new Set(allProjects.map((project) => project.category)));
  const allCategories = ["All", ...uniqueCategories];

  const filteredProjects =
    selectedCategory === "All" ? allProjects : allProjects.filter((project) => project.category === selectedCategory);

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
        </div>
      </section>
    );
  }

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
              key={project._id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

