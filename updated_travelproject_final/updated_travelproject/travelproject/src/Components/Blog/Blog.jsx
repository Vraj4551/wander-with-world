// Blog.js
import React, { useState } from "react";
import "./Blog.scss";

import image37 from "../../Assets/image37.jpg";
import image38 from "../../Assets/image38.jpg";
import image39 from "../../Assets/image39.jpg";
import image40 from "../../Assets/image40.jpg";

const Blog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Discovering the Serenity of Kerala Backwaters",
      image: image37, // Correctly using the imported variable
      excerpt:
        "Experience the tranquility of Kerala’s backwaters with houseboat stays and lush green landscapes.",
      content:
        "The backwaters of Kerala offer a mesmerizing experience with their peaceful waters, coconut groves, and traditional houseboats...",
    },
    {
      id: 2,
      title: "A Spiritual Retreat in Varanasi",
      image: image38, // Correctly using the imported variable
      excerpt:
        "Explore the ghats of the Ganges and immerse yourself in the spiritual energy of Varanasi.",

      content:
        "Varanasi, one of the oldest living cities, offers a unique experience with its sacred ghats, evening aartis, and deep cultural heritage...",
    },
    {
      id: 3,
      title: "The Royal Heritage of Rajasthan",
      image: image39, // Correctly using the imported variable
      excerpt:
        "Step into a world of majestic palaces, golden deserts, and vibrant traditions in Rajasthan.",

      content:
        "From the pink city of Jaipur to the golden dunes of Jaisalmer, Rajasthan is a land of history, culture, and grandeur...",
    },
    {
      id: 4,
      title: "Exploring the Tea Gardens of Darjeeling",
      image: image40, // Correctly using the imported variable
      excerpt:
        "Witness the breathtaking sunrise over the Himalayas while sipping world-famous Darjeeling tea.",

      content:
        "Darjeeling is a paradise for nature lovers, offering panoramic views, colonial charm, and lush tea gardens...",
    },
  ]);

  return (
    <section className="blog section container">
      <div className="secTitle">
        <h2>Blog</h2>
        <p>
          Stay updated with our latest travel tips, stories, and inspiration.
        </p>
      </div>
      <div className="blog-grid">
        {posts.map((post) => (
          <div key={post.id} className="blog-post">
            <img
              src={post.image}
              alt={post.title}
              className="blog-post-image"
            />
            <div className="blog-post-content">
              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-post-excerpt">
                {post.excerpt || post.content.slice(0, 200) + "..."}
              </p>
              <a href={`/blog/${post.id}`} className="blog-post-link">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
