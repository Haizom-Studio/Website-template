"use client";

import BannerFour from "@/components/banner/BannerFour";
import BrandOne from "@/components/brand/BrandOne";
import Navbar from "@/components/header/navbar";
import MainPageService from "@/components/services/main-page";
import TestimonialOne from "@/components/testimonial/TestimonialOne";

export default function Home() {
  return (
    <main className="main-wrapper">
      <Navbar />
      <BannerFour title="Company Vision" subtitle="We Believe In Delivering Quality Over Quantity" description="We are a one stop shop for all tailored software needs. with our services, we assure to deliver the solutions to streamline client 's operations. With a team of highly skilled developers and creative minds, we strive to achieve escalated client's satisfaction." />
      <MainPageService />
      <BrandOne />
      <TestimonialOne />
    </main>
  );
}
