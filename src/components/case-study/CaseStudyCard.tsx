import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CaseStudyCardProps {
  id: number;
  thumb: string;
  title: string;
  subtitle: string;
  count_roi: string;
  count_visit: string;
  excerpt: string;
  className?: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  thumb,
  title,
  subtitle,
  count_roi,
  count_visit,
  excerpt,
  className = ''
}) => {
  return (
    <div className={`axil-case-study axil-case-study-style-1 ${className}`}>
      <div className="case-study-inner">
        <div className="case-study-thumb">
          <Link href={`/case-studies/${id}`}>
            <Image
              src={thumb}
              alt={title}
              width={400}
              height={300}
              className="w-100"
            />
          </Link>
          <div className="case-study-overlay">
            <div className="case-study-content">
              <div className="case-study-meta">
                <span className="subtitle">{subtitle}</span>
              </div>
              <h3 className="case-study-title">
                <Link href={`/case-studies/${id}`}>
                  {title}
                </Link>
              </h3>
              <p className="case-study-excerpt">{excerpt}</p>
              <div className="case-study-stats">
                <div className="stat-item">
                  <span className="stat-number">{count_roi}%</span>
                  <span className="stat-label">ROI Increase</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{count_visit}%</span>
                  <span className="stat-label">Efficiency Gain</span>
                </div>
              </div>
              <div className="case-study-action">
                <Link href={`/case-studies/${id}`} className="axil-btn btn-fill-primary">
                  View Case Study
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
