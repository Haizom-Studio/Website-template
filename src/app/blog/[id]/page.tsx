export const runtime = 'edge';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import BlogData from '@/data/blog/BlogData.json';
import '../blog.css';

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

const BlogDetailPage = () => {
  const params = useParams();
  const postId = parseInt(params.id as string);
  const post: BlogPost | undefined = BlogData.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="axil-blog-area axil-section-gap bg-color-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>Post not found</h2>
                <p>The blog post you're looking for doesn't exist.</p>
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
          <div className="col-lg-8">
            <div className="axil-blog-details">
              <div className="blog-thumb">
                <Image
                  src={`/${post.large_thumb}`}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-100"
                />
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
                
                <h1 className="blog-title">{post.title}</h1>
                
                <div className="blog-excerpt">
                  <p>{post.excerpt}</p>
                </div>
                
                <div className="blog-body">
                  {post.body.map((paragraph, index) => (
                    <div
                      key={index}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>
                
                {post.features_img && post.features_img.length > 0 && (
                  <div className="blog-features-img mt-4">
                    {post.features_img.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        alt={`Feature image ${index + 1}`}
                        width={800}
                        height={400}
                        className="w-100 mb-3"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="axil-blog-sidebar">
              <div className="widget">
                <h4 className="widget-title">About Author</h4>
                <div className="author-info">
                  <div className="author-avatar">
                    <Image
                      src={`/${post.author_avatar}`}
                      alt={post.author_name}
                      width={80}
                      height={80}
                      className="rounded-circle"
                    />
                  </div>
                  <div className="author-details">
                    <h5 className="author-name">{post.author_name}</h5>
                    <p className="author-bio">{post.author_para}</p>
                    <div className="author-social">
                      <ul className="social-share">
                        {post.social[0].facebook && (
                          <li>
                            <a href={post.social[0].facebook} target="_blank" rel="noopener noreferrer">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                        )}
                        {post.social[0].twitter && (
                          <li>
                            <a href={post.social[0].twitter} target="_blank" rel="noopener noreferrer">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                        )}
                        {post.social[0].linkedin && (
                          <li>
                            <a href={post.social[0].linkedin} target="_blank" rel="noopener noreferrer">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="widget">
                <h4 className="widget-title">Recent Posts</h4>
                <div className="recent-posts">
                  {BlogData.slice(0, 3).map((recentPost) => (
                    <div key={recentPost.id} className="recent-post-item">
                      <div className="post-thumb">
                        <Link href={`/blog/${recentPost.id}`}>
                          <Image
                            src={`/${recentPost.thumb}`}
                            alt={recentPost.title}
                            width={80}
                            height={60}
                          />
                        </Link>
                      </div>
                      <div className="post-content">
                        <h6 className="post-title">
                          <Link href={`/blog/${recentPost.id}`}>
                            {recentPost.title}
                          </Link>
                        </h6>
                        <span className="post-date">{recentPost.post_date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="blog-navigation">
              <Link href="/blog" className="axil-btn btn-fill-primary">
                <i className="fas fa-arrow-left"></i> Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
