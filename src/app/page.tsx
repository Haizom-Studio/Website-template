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
      <BannerFour title="Haizom Studio" subtitle="Engineering Ideas into Reality" description="At Haizom Studio, we don’t just develop solutions, we engineer them from hardware to software. From PCB design and embedded systems to IoT platforms, DevOps pipelines, web dashboards, and mobile apps, we bring innovation to life with precision and scalability." />
      <MainPageService />
      <BrandOne />
      <TestimonialOne />
    </main>
  );
}
