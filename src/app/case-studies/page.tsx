"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BcrumbBannerOne from '@/components/elements/breadcrumb/BcrumbBannerOne';
import CaseStudyData from '@/data/casestudy/CaseStudyData.json';
import './case-studies.css';

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

const CaseStudiesPage = () => {
  const [filter, setFilter] = useState('all');
  const caseStudies: CaseStudy[] = CaseStudyData;

  const categories = [
    { id: 'all', name: 'All Projects', count: caseStudies.length },
    { id: 'embedded', name: 'Embedded Systems', count: 2 },
    { id: 'iot', name: 'IoT Solutions', count: 1 },
    { id: 'web', name: 'Web Applications', count: 1 },
    { id: 'mobile', name: 'Mobile Apps', count: 1 },
    { id: 'devops', name: 'DevOps', count: 1 }
  ];

  const filteredCaseStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => {
        // This is a simple filter - in a real app, you'd have category data
        return study.id % 2 === 0 ? filter === 'embedded' : filter === 'iot';
      });

  return (
    <main className="main-wrapper">
      <BcrumbBannerOne
        title="Case Studies"
        paragraph="Explore our successful projects and see how we've helped clients achieve their goals through innovative hardware and software solutions. From embedded systems to IoT platforms, discover the impact of our engineering expertise."
        styleClass=""
        mainThumb="/images/banner/banner-thumb-1.png"
      />
      
      <div className="axil-case-study-area axil-section-gap bg-color-white">
        <div className="container">
          {/* Filter Section */}
          <div className="row">
            <div className="col-lg-12">
              <div className="case-study-filter">
                <div className="filter-tabs">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`filter-tab ${filter === category.id ? 'active' : ''}`}
                      onClick={() => setFilter(category.id)}
                    >
                      {category.name}
                      <span className="count">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="row">
            {filteredCaseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className="col-lg-4 col-md-6 col-12">
                <div className="axil-case-study axil-case-study-style-1">
                  <div className="case-study-inner">
                    <div className="case-study-thumb">
                      <Link href={`/case-studies/${caseStudy.id}`}>
                        <Image
                          src={caseStudy.thumb}
                          alt={caseStudy.title}
                          width={400}
                          height={300}
                          className="w-100"
                        />
                      </Link>
                      <div className="case-study-overlay">
                        <div className="case-study-content">
                          <div className="case-study-meta">
                            <span className="subtitle">{caseStudy.subtitle}</span>
                          </div>
                          <h3 className="case-study-title">
                            <Link href={`/case-studies/${caseStudy.id}`}>
                              {caseStudy.title}
                            </Link>
                          </h3>
                          <p className="case-study-excerpt">{caseStudy.excerpt}</p>
                          <div className="case-study-stats">
                            <div className="stat-item">
                              <span className="stat-number">{caseStudy.count_roi}%</span>
                              <span className="stat-label">ROI Increase</span>
                            </div>
                            <div className="stat-item">
                              <span className="stat-number">{caseStudy.count_visit}%</span>
                              <span className="stat-label">Efficiency Gain</span>
                            </div>
                          </div>
                          <div className="case-study-action">
                            <Link href={`/case-studies/${caseStudy.id}`} className="axil-btn btn-fill-primary">
                              View Case Study
                              <i className="fas fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="case-study-cta">
                <div className="cta-content">
                  <h3>Ready to Start Your Project?</h3>
                  <p>Let's discuss how we can help you achieve your goals with our engineering expertise.</p>
                  <div className="cta-actions">
                    <Link href="/contact-us" className="axil-btn btn-fill-primary">
                      Start Your Project
                    </Link>
                    <Link href="/services" className="axil-btn btn-outline-primary">
                      View Our Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CaseStudiesPage;
