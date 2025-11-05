import React from "react";
import { ProjectsList } from "../constants/ProjectsList";



export default function ProjectSection() {
  
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl mb-4 font-bold text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          Here are some of our recent projects. Each project was carefully
          crafted with attention to detail,performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectsList.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform 500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 px-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag,key) => (
                    <span key={key} className="px-2 py-1 text-sm font-medium rounded-full border bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="text-center mt-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="cosmic-button hover:text-primary hover:border-primary hover:bg-transparent transition-colors 300 "
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

     
<div className="mt-12">
              <a
href="https://www.linkedin.com/in/mukul-sharma-946bb8170?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
target="_blank"
            className="cosmic-button rounded-lg text-lg inline"
          >
            Checkout My Linkedin
          </a>
</div>
    
      </div>
    </section>
  );
}
