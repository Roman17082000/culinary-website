import React from "react";

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The History of Pizza",
      description:
        "Explore how pizza became one of the world's favorite dishes.",
      image: "/images/pizza-history.jpg",
    },
    {
      id: 2,
      title: "10 Benefits of Eating Fresh Vegetables",
      description:
        "Discover why fresh veggies are essential for a healthy lifestyle.",
      image: "/images/vegetables.jpg",
    },
  ];

  return (
    <section className="blog-section">
      <h2>Food Stories & Blog</h2>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-item">
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
