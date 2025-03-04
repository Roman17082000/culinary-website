import React, { useState, useEffect, useRef } from "react";
import { blogPosts } from "./blogPosts";
import "./BlogCard.scss";
import Button from "../../../../components/UI/Button/Button.tsx";

const BlogCard: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 },
    );

    const cards = containerRef.current?.querySelectorAll(".blog-card");
    cards?.forEach((card) => observer.observe(card));

    return () => {
      cards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="blog-container" ref={containerRef}>
      <h2>Полезная информация, листай вниз!</h2>
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className={`blog-card ${expandedPost === post.id ? "expanded" : ""}`}
        >
          <div className="blog-image">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="blog-content">
            <h2>{post.title}</h2>
            <p
              className={`blog-description ${expandedPost === post.id ? "expanded" : ""}`}
            >
              {post.fullDescription}
            </p>
            <Button
              aria-label="Toggle menu"
              onClick={() =>
                setExpandedPost(expandedPost === post.id ? null : post.id)
              }
            >
              {expandedPost === post.id ? "Скрыть" : "Читать дальше"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
