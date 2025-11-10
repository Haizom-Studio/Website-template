export const runtime = 'edge';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import BlogData from '@/data/blog/BlogData.json';
import '../../blog.css';

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


const BlogCategoryPage = () => {
  const params = useParams();
  const categorySlug = params.category as string;
  const categoryName = categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const filteredPosts: BlogPost[] = BlogData.filter((post) => 
    post.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );

  if (filteredPosts.length === 0) {
    return (
      <div className="axil-blog-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>No posts found in this category</h2>
                <p>There are no blog posts in the "{categoryName}" category.</p>
                <Link href="/blog" className="axil-btn btn-fill-primary">
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="axil-blog-area axil-section-gap bg-color-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-title text-center">
              <h2 className="title mb--10">Category: {categoryName}</h2>
              <p className="b1 mb--0">Posts in the {categoryName} category</p>
            </div>
          </div>
        </div>
        
        <div className="row">
          {filteredPosts.map((post) => (
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
        
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="blog-navigation text-center">
              <Link href="/blog" className="axil-btn btn-fill-primary">
                <i className="fas fa-arrow-left"></i> Back to All Posts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategoryPage;
