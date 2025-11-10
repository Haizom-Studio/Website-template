export const runtime = 'edge';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import BcrumbBannerOne from '@/components/elements/breadcrumb/BcrumbBannerOne';
import CaseStudyData from '@/data/casestudy/CaseStudyData.json';
import '../case-studies.css';

interface CaseStudy {
  id: number;
  thumb: string;
  title: string;
  subtitle: string;
  count_roi: string;
  count_visit: string;
  excerpt: string;
  details: string;
  solution: string;
}


const CaseStudyDetailPage = () => {
  const params = useParams();
  const caseStudyId = parseInt(params.id as string);
  const caseStudy: CaseStudy | undefined = CaseStudyData.find((cs) => cs.id === caseStudyId);

  if (!caseStudy) {
    return (
      <main className="main-wrapper">
        <BcrumbBannerOne
          title="Case Study Not Found"
          paragraph="The case study you're looking for doesn't exist."
          styleClass=""
          mainThumb="/images/banner/banner-thumb-1.png"
        />
        <div className="axil-case-study-area axil-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <h2>Case Study Not Found</h2>
                  <p>The case study you're looking for doesn't exist.</p>
                  <Link href="/case-studies" className="axil-btn btn-fill-primary">
                    Back to Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="main-wrapper">
      <BcrumbBannerOne
        title={caseStudy.title}
        paragraph={caseStudy.excerpt}
        styleClass=""
        mainThumb={caseStudy.thumb}
      />
      
      <div className="axil-case-study-detail-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="case-study-detail-content">
                {/* Project Overview */}
                <div className="project-overview">
                  <h2>Project Overview</h2>
                  <div 
                    className="project-details"
                    dangerouslySetInnerHTML={{ __html: caseStudy.details }}
                  />
                </div>

                {/* Challenge Section */}
                <div className="challenge-section">
                  <h2>The Challenge</h2>
                  <p>
                    Every successful project starts with understanding the client's unique challenges. 
                    In this case, we faced complex technical requirements that demanded innovative 
                    solutions combining hardware and software expertise.
                  </p>
                  <div className="challenge-points">
                    <div className="challenge-point">
                      <div className="point-icon">
                        <i className="fas fa-exclamation-triangle"></i>
                      </div>
                      <div className="point-content">
                        <h4>Technical Complexity</h4>
                        <p>Integrating multiple systems and ensuring seamless communication</p>
                      </div>
                    </div>
                    <div className="challenge-point">
                      <div className="point-icon">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div className="point-content">
                        <h4>Timeline Constraints</h4>
                        <p>Delivering a robust solution within tight project deadlines</p>
                      </div>
                    </div>
                    <div className="challenge-point">
                      <div className="point-icon">
                        <i className="fas fa-cogs"></i>
                      </div>
                      <div className="point-content">
                        <h4>Scalability Requirements</h4>
                        <p>Building a solution that could grow with the client's business</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solution Section */}
                <div className="solution-section">
                  <h2>Our Solution</h2>
                  <div 
                    className="solution-details"
                    dangerouslySetInnerHTML={{ __html: caseStudy.solution }}
                  />
                  
                  <div className="solution-features">
                    <div className="feature-grid">
                      <div className="feature-item">
                        <div className="feature-icon">
                          <i className="fas fa-microchip"></i>
                        </div>
                        <h4>Embedded Systems</h4>
                        <p>Custom PCB design and firmware development</p>
                      </div>
                      <div className="feature-item">
                        <div className="feature-icon">
                          <i className="fas fa-wifi"></i>
                        </div>
                        <h4>IoT Integration</h4>
                        <p>Seamless connectivity and data management</p>
                      </div>
                      <div className="feature-item">
                        <div className="feature-icon">
                          <i className="fas fa-cloud"></i>
                        </div>
                        <h4>Cloud Platform</h4>
                        <p>Scalable backend infrastructure and APIs</p>
                      </div>
                      <div className="feature-item">
                        <div className="feature-icon">
                          <i className="fas fa-mobile-alt"></i>
                        </div>
                        <h4>Mobile App</h4>
                        <p>User-friendly interface for device control</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="results-section">
                  <h2>Results & Impact</h2>
                  <div className="results-grid">
                    <div className="result-item">
                      <div className="result-number">{caseStudy.count_roi}%</div>
                      <div className="result-label">ROI Increase</div>
                      <div className="result-description">Measured improvement in business efficiency</div>
                    </div>
                    <div className="result-item">
                      <div className="result-number">{caseStudy.count_visit}%</div>
                      <div className="result-label">Efficiency Gain</div>
                      <div className="result-description">Reduction in operational overhead</div>
                    </div>
                    <div className="result-item">
                      <div className="result-number">99.9%</div>
                      <div className="result-label">Uptime</div>
                      <div className="result-description">Reliable system performance</div>
                    </div>
                    <div className="result-item">
                      <div className="result-number">24/7</div>
                      <div className="result-label">Support</div>
                      <div className="result-description">Continuous monitoring and maintenance</div>
                    </div>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="technologies-section">
                  <h2>Technologies Used</h2>
                  <div className="tech-tags">
                    <span className="tech-tag">Embedded C</span>
                    <span className="tech-tag">PCB Design</span>
                    <span className="tech-tag">IoT Protocols</span>
                    <span className="tech-tag">React Native</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">AWS</span>
                    <span className="tech-tag">Docker</span>
                    <span className="tech-tag">Kubernetes</span>
                    <span className="tech-tag">MongoDB</span>
                    <span className="tech-tag">REST APIs</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="case-study-sidebar">
                {/* Project Info */}
                <div className="sidebar-widget">
                  <h4>Project Information</h4>
                  <div className="project-info">
                    <div className="info-item">
                      <span className="info-label">Client:</span>
                      <span className="info-value">{caseStudy.title}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Category:</span>
                      <span className="info-value">Hardware & Software</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Duration:</span>
                      <span className="info-value">6 months</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Team Size:</span>
                      <span className="info-value">5 engineers</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Status:</span>
                      <span className="info-value completed">Completed</span>
                    </div>
                  </div>
                </div>

                {/* Related Case Studies */}
                <div className="sidebar-widget">
                  <h4>Related Case Studies</h4>
                  <div className="related-case-studies">
                    {CaseStudyData.filter(cs => cs.id !== caseStudy.id).slice(0, 3).map((relatedStudy) => (
                      <div key={relatedStudy.id} className="related-case-study">
                        <div className="related-thumb">
                          <Link href={`/case-studies/${relatedStudy.id}`}>
                            <Image
                              src={relatedStudy.thumb}
                              alt={relatedStudy.title}
                              width={80}
                              height={60}
                            />
                          </Link>
                        </div>
                        <div className="related-content">
                          <h6>
                            <Link href={`/case-studies/${relatedStudy.id}`}>
                              {relatedStudy.title}
                            </Link>
                          </h6>
                          <p>{relatedStudy.excerpt.substring(0, 80)}...</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="sidebar-widget">
                  <div className="cta-widget">
                    <h4>Ready to Start Your Project?</h4>
                    <p>Let's discuss how we can help you achieve similar results.</p>
                    <Link href="/contact-us" className="axil-btn btn-fill-primary w-100">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="case-study-navigation">
                <Link href="/case-studies" className="axil-btn btn-outline-primary">
                  <i className="fas fa-arrow-left"></i> Back to Case Studies
                </Link>
                <Link href="/contact-us" className="axil-btn btn-fill-primary">
                  Start Your Project <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CaseStudyDetailPage;
