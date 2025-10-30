"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlogData from '@/data/blog/BlogData.json';
import './blog.css';

interface BlogPost {
  id: number;
  title: string;
  post_date: string;
  read_time: string;
  thumb: string;
  large_thumb: string | string[];
  category: string;
  format: string;
  excerpt: string;
  body: string[];
  features_img: string[];
  author_name: string;
  author_avatar: string;
  author_para: string;
  social: Array<{
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    vimeo: string;
    pinterst: string;
    dribble: string;
    behance: string;
  }>;
}

const BlogPage = () => {
  const blogPosts: BlogPost[] = BlogData;

  return (
    <div className="axil-blog-area axil-section-gap bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-title text-center">
              <h2 className="title mb--10">Our Blog</h2>
              <p className="b1 mb--0">Stay updated with the latest insights and trends in technology</p>
            </div>
          </div>
        </div>
        
        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6 col-12">
              <div className="axil-blog axil-blog-style-1">
                <div className="blog-inner">
                  <div className="blog-thumb">
                    <Link href={`/blog/${post.id}`}>
                      <Image
                        src={`/${post.thumb}`}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-100"
                      />
                    </Link>
                    <div className="blog-category">
                      <Link href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}>
                        {post.category}
                      </Link>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="blog-date">{post.post_date}</span>
                      <span className="blog-reading-time">{post.read_time}</span>
                    </div>
                    <h4 className="blog-title">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h4>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-author">
                      <div className="author-info">
                        <div className="author-avatar">
                          <Image
                            src={`/${post.author_avatar}`}
                            alt={post.author_name}
                            width={40}
                            height={40}
                            className="rounded-circle"
                          />
                        </div>
                        <div className="author-details">
                          <h6 className="author-name">{post.author_name}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
