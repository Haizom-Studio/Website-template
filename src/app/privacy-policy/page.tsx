"use client";

import React from 'react';
import Link from 'next/link';
import './legal.css';

const PrivacyPolicyPage = () => {
  return (
    <div className="axil-legal-area axil-section-gap bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-title text-center">
              {/* <h1 className="title mb--10">Privacy Policy</h1>
              <p className="b1 mb--0">Last updated: {new Date().toLocaleDateString()}</p> */}
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="legal-content">
              <div className="legal-section">
                <h2>1. Introduction</h2>
                <p>
                  Haizom Studio ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our hardware and software development services.
                </p>
                <p>
                  We are a technology company specializing in embedded systems, IoT product development, PCB design, DevOps pipelines, web dashboards, and mobile applications. This policy applies to all information collected through our website and services.
                </p>
              </div>

              <div className="legal-section">
                <h2>2. Information We Collect</h2>
                
                <h3>2.1 Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide to us, including:</p>
                <ul>
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Company information and job title</li>
                  <li>Project requirements and technical specifications</li>
                  <li>Payment and billing information (with your consent)</li>
                  <li>Communication preferences</li>
                </ul>

                <h3>2.2 Technical Information</h3>
                <p>We automatically collect certain technical information, including:</p>
                <ul>
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website information</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>

                <h3>2.3 Hardware and Software Data</h3>
                <p>In the course of providing our services, we may collect:</p>
                <ul>
                  <li>Technical specifications and requirements</li>
                  <li>Source code and design files</li>
                  <li>Hardware schematics and PCB designs</li>
                  <li>Testing data and performance metrics</li>
                  <li>Device logs and diagnostic information</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>3. How We Use Your Information</h2>
                <p>We use the collected information for the following purposes:</p>
                <ul>
                  <li>Providing and improving our hardware and software development services</li>
                  <li>Communicating with you about projects and services</li>
                  <li>Processing payments and managing billing</li>
                  <li>Customizing our services to meet your specific requirements</li>
                  <li>Providing technical support and maintenance</li>
                  <li>Conducting research and development</li>
                  <li>Complying with legal obligations</li>
                  <li>Marketing and promotional activities (with your consent)</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>4. Information Sharing and Disclosure</h2>
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                <ul>
                  <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in providing our services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and interests</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> When you have given explicit consent for specific sharing</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. This includes:
                </p>
                <ul>
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Secure development practices for all software and hardware</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>6. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Project-related data may be retained for longer periods to provide ongoing support and maintenance.
                </p>
              </div>

              <div className="legal-section">
                <h2>7. Your Rights</h2>
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul>
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                  <li>Withdrawal of consent</li>
                </ul>
                <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section.</p>
              </div>

              <div className="legal-section">
                <h2>8. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
                </p>
              </div>

              <div className="legal-section">
                <h2>9. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                </p>
              </div>

              <div className="legal-section">
                <h2>10. Children's Privacy</h2>
                <p>
                  Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.
                </p>
              </div>

              <div className="legal-section">
                <h2>11. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </div>

              <div className="legal-section">
                <h2>12. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <div className="contact-info">
                  <p><strong>Haizom Studio</strong></p>
                  <p>Email: privacy@haizomstudio.com</p>
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

export default PrivacyPolicyPage;
