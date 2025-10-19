export const runtime = 'edge';


import React from "react";
import { notFound } from "next/navigation";
import ProjectData from "../../../data/project/ProjectData.json";
import BcrumbBannerOne from "@/components/elements/breadcrumb/BcrumbBannerOne";
import { slugify } from "@/utils";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProjectDetailsPage({ params }: Props) {
  const { slug } = params;

  console.log(slug);

  const project = ProjectData.find(
    (item) => item && item.title && slug === slugify(item.title)
  );

  if (!project) {
    notFound();
  }

  return (
    <div>
      <BcrumbBannerOne
        title={project.title}
        paragraph={project.excerpt}
        styleClass=""
        mainThumb={project.image}
      />
      
      <div className="section section-padding-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="project-details">
                <div className="project-image mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="img-fluid rounded"
                  />
                </div>
                
                <div className="project-content">
                  <h2 className="mb-3">{project.title}</h2>
                  
                  <div className="project-categories mb-4">
                    <h5>Categories:</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {project.category.map((cat: string, index: number) => (
                        <span 
                          key={index}
                          className="badge bg-primary me-2 mb-2"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-description">
                    <h5>Project Description</h5>
                    {project.body.map((paragraph: string, index: number) => (
                      <p key={index} className="mb-3">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="project-sidebar">
                <div className="sidebar-widget">
                  <h4>Project Info</h4>
                  <div className="widget-content">
                    <div className="info-item mb-3">
                      <strong>Project ID:</strong>
                      <span className="ms-2">{project.id}</span>
                    </div>
                    <div className="info-item mb-3">
                      <strong>Categories:</strong>
                      <div className="mt-2">
                        {project.category.map((cat: string, index: number) => (
                          <span 
                            key={index}
                            className="badge bg-secondary me-1 mb-1"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="sidebar-widget mt-4">
                  <h4>Quick Actions</h4>
                  <div className="widget-content">
                    <a 
                      href="/projects" 
                      className="btn btn-outline-primary w-100 mb-2"
                    >
                      View All Projects
                    </a>
                    <a 
                      href="/contact-us" 
                      className="btn btn-primary w-100"
                    >
                      Get In Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
