"use client"
import ProjectData from "../../../data/project/ProjectData.json";
import BcrumbBannerOne from "@/components/elements/breadcrumb/BcrumbBannerOne";
import SectionTitle from "@/components/elements/section-title/SectionTitle";
import ServiceCTA from "@/components/services/ServiceCTA";
import { slugify } from "@/utils";

interface Props {
  params: {
    slug: string;
  };
}

export const runtime = "edge";

// export function generateStaticParams() {
//   return ProjectData.map((item) => ({ slug: slugify(item.title) }));
// }

export default function ProjectDetailsPage({ params }: Props) {
  const { slug } = params;

  const project = ProjectData.find(
    (item) => item && item.title && slug === slugify(item.title)
  );

  if (!project) {
    return (
      <div className="section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <h1>Project not found</h1>
                <p>The project you're looking for doesn't exist.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <BcrumbBannerOne
        title={project.title}
        paragraph={project.excerpt}
        styleClass=""
        mainThumb={project.image}
      />

      <div className="section section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="service-overview">
                <div className="service-icon mb-4">
                  <img src={project.image} alt={project.title} className="img-fluid" style={{maxWidth: '80px'}} />
                </div>
                <h2 className="mb-4">{project.title}</h2>
                <p className="lead mb-4">{project.excerpt}</p>
                {project.category && project.category.length > 0 && (
                  <div className="mb-4">
                    <span className="badge bg-primary fs-6 me-2">Categories</span>
                    <span className="subtitle">
                      {project.category.map((cat: string, i: number) => (
                        <span key={i} className="me-2">{cat}</span>
                      ))}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                subtitle="Project Overview"
                title={`About <br> ${project.title}`}
                description=""
                textAlignment="heading-center"
                textColor=""
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-10 mx-auto">
              {project.body && project.body.length > 0 && project.body.map((para: string, i: number) => (
                <p key={i} className="mb-3">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="contact">
        <ServiceCTA serviceTitle={project.title} />
      </div>
    </>
  );
}


