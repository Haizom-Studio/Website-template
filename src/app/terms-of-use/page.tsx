"use client";

import React from 'react';
import Link from 'next/link';
import './legal.css';

const TermsOfUsePage = () => {
  return (
    <div className="axil-legal-area axil-section-gap bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-title text-center">
              {/* <h1 className="title mb--10">Terms of Use</h1>
              <p className="b1 mb--0">Last updated: {new Date().toLocaleDateString()}</p> */}
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="legal-content">
              <div className="legal-section">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  Welcome to Haizom Studio. These Terms of Use ("Terms") govern your use of our website and services. By accessing or using our website or engaging our services, you agree to be bound by these Terms.
                </p>
                <p>
                  If you do not agree to these Terms, please do not use our website or services. We reserve the right to modify these Terms at any time, and your continued use of our services constitutes acceptance of any changes.
                </p>
              </div>

              <div className="legal-section">
                <h2>2. About Our Services</h2>
                <p>
                  Haizom Studio specializes in comprehensive technology solutions including:
                </p>
                <ul>
                  <li>Embedded systems development and design</li>
                  <li>IoT product development and integration</li>
                  <li>PCB design and hardware prototyping</li>
                  <li>Software development (web, mobile, desktop applications)</li>
                  <li>DevOps pipeline setup and management</li>
                  <li>Cloud infrastructure and deployment solutions</li>
                  <li>Technical consulting and project management</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>3. Service Agreements</h2>
                
                <h3>3.1 Project Scope and Deliverables</h3>
                <p>
                  All projects will be governed by separate service agreements that specify:
                </p>
                <ul>
                  <li>Project scope, timeline, and deliverables</li>
                  <li>Technical specifications and requirements</li>
                  <li>Pricing, payment terms, and milestones</li>
                  <li>Intellectual property rights and ownership</li>
                  <li>Quality standards and acceptance criteria</li>
                </ul>

                <h3>3.2 Client Responsibilities</h3>
                <p>Clients are responsible for:</p>
                <ul>
                  <li>Providing accurate and complete project requirements</li>
                  <li>Timely provision of necessary materials and access</li>
                  <li>Payment according to agreed terms</li>
                  <li>Review and approval of deliverables within specified timeframes</li>
                  <li>Compliance with applicable laws and regulations</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>4. Intellectual Property Rights</h2>
                
                <h3>4.1 Client IP</h3>
                <p>
                  All intellectual property provided by the client remains the property of the client. We will not claim ownership of client's pre-existing intellectual property.
                </p>

                <h3>4.2 Work Product</h3>
                <p>
                  Unless otherwise specified in the service agreement, all work product created specifically for the client will be owned by the client upon full payment. We retain the right to use general knowledge, skills, and methodologies developed during the project.
                </p>

                <h3>4.3 Our IP</h3>
                <p>
                  Our proprietary tools, frameworks, libraries, and methodologies remain our intellectual property. We may license these to clients as part of our services.
                </p>
              </div>

              <div className="legal-section">
                <h2>5. Payment Terms</h2>
                <p>
                  Payment terms will be specified in individual service agreements. Generally:
                </p>
                <ul>
                  <li>Invoices are due within 30 days of receipt unless otherwise specified</li>
                  <li>Late payments may incur additional charges</li>
                  <li>We reserve the right to suspend services for overdue payments</li>
                  <li>All prices are exclusive of applicable taxes</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>6. Confidentiality</h2>
                <p>
                  We understand the sensitive nature of your projects and maintain strict confidentiality. We will:
                </p>
                <ul>
                  <li>Keep all client information and project details confidential</li>
                  <li>Use information only for the purpose of providing services</li>
                  <li>Implement appropriate security measures to protect confidential information</li>
                  <li>Require all team members to sign confidentiality agreements</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>7. Warranty and Support</h2>
                
                <h3>7.1 Service Warranty</h3>
                <p>
                  We warrant that our services will be performed in a professional manner consistent with industry standards. Specific warranty terms will be outlined in service agreements.
                </p>

                <h3>7.2 Support and Maintenance</h3>
                <p>
                  Post-delivery support and maintenance services may be available under separate agreements. We will provide reasonable support for issues related to our work during the warranty period.
                </p>
              </div>

              <div className="legal-section">
                <h2>8. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law:
                </p>
                <ul>
                  <li>Our total liability shall not exceed the total amount paid for the specific services</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>We are not responsible for third-party software or hardware issues</li>
                  <li>Client assumes responsibility for proper testing and implementation</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>9. Indemnification</h2>
                <p>
                  Clients agree to indemnify and hold us harmless from any claims, damages, or expenses arising from:
                </p>
                <ul>
                  <li>Client's use of our services in violation of these Terms</li>
                  <li>Client's violation of any third-party rights</li>
                  <li>Client's failure to comply with applicable laws</li>
                  <li>Client's provision of inaccurate or incomplete information</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>10. Termination</h2>
                <p>
                  Either party may terminate services with written notice as specified in the service agreement. Upon termination:
                </p>
                <ul>
                  <li>All outstanding payments become immediately due</li>
                  <li>We will deliver completed work product</li>
                  <li>Confidentiality obligations continue indefinitely</li>
                  <li>Each party retains their respective intellectual property rights</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>11. Force Majeure</h2>
                <p>
                  We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to natural disasters, government actions, or other force majeure events.
                </p>
              </div>

              <div className="legal-section">
                <h2>12. Governing Law and Dispute Resolution</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration or in the courts of competent jurisdiction.
                </p>
              </div>

              <div className="legal-section">
                <h2>13. Website Use</h2>
                <p>
                  When using our website, you agree to:
                </p>
                <ul>
                  <li>Use the website only for lawful purposes</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not interfere with the proper functioning of the website</li>
                  <li>Respect our intellectual property rights</li>
                  <li>Provide accurate information when contacting us</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>14. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify clients of significant changes and post updated Terms on our website. Continued use of our services constitutes acceptance of modified Terms.
                </p>
              </div>

              <div className="legal-section">
                <h2>15. Contact Information</h2>
                <p>If you have any questions about these Terms of Use, please contact us:</p>
                <div className="contact-info">
                  <p><strong>Haizom Studio</strong></p>
                  <p>Email: legal@haizomstudio.com</p>
                  <p>Phone: [Your Phone Number]</p>
                  <p>Address: [Your Business Address]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="legal-navigation text-center">
              <Link href="/" className="axil-btn btn-fill-primary">
                <i className="fas fa-arrow-left"></i> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
