import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaUserCircle, FaRegComment } from "react-icons/fa";
import AuthorImage from '../../assets/authorImage.png';
import blog1 from '../../assets/blogs/blog1.png';
import blog2 from '../../assets/blogs/blog2.png';
import blog3 from '../../assets/blogs/blog3.png';
import blog4 from '../../assets/blogs/blog4.png';
import blog5 from '../../assets/blogs/blog5.png';

const Post = () => {
  const { id } = useParams();

  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Top 5 Sofa Designs for Your Living Room",
      content:
        "Explore the latest sofa designs to elevate your living room decor. From modern minimalism to cozy classics, find the perfect fit for your space. These designs are crafted to bring a balance of style and functionality to your home. Choose the perfect sofa that resonates with your personal taste and complements your decor.Explore the latest sofa designs to elevate your living room decor. From modern minimalism to cozy classics, find the perfect fit for your space.These designs are crafted to bring a balance of style and functionality to your home.Choose the perfect sofa that resonates with your personal taste and complements your decor.Explore the latest sofa designs to elevate your living room decor.From modern minimalism to cozy classics, find the perfect fit for your space.These designs are crafted to bring a balance of style and functionality to your home.Choose the perfect sofa that resonates with your personal taste and complements your decor.Explore the latest sofa designs to elevate your living room decor.From modern minimalism to cozy classics, find the perfect fit for your space.These designs are crafted to bring a balance of style and functionality to your home.Choose the perfect sofa that resonates with your personal taste and complements your decor.Explore the latest sofa designs to elevate your living room decor.From modern minimalism to cozy classics, find the perfect fit for your space.These designs are crafted to bring a balance of style and functionality to your home.Choose the perfect sofa that resonates with your personal taste and complements your decor.",
      image: blog1,
      author: "Jane Doe",
      date: "2024-11-29",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Dining Table",
      content:
        "A dining table is the heart of every home. Learn how to pick the right size, style, and material to match your dining room. Whether you prefer classic wood or modern glass, our guide helps you make an informed decision.",
      image: blog2,
      author: "John Smith",
      date: "2024-11-28",
    },
    {
      id: 3,
      title: "5 Must-Have Bedroom Furniture Pieces",
      content:
        "Transform your bedroom into a cozy retreat with these essential furniture pieces. From comfortable beds to functional nightstands, discover options that suit your needs and budget.",
      image: blog3,
      author: "Emily Johnson",
      date: "2024-11-27",
    },
    {
      id: 4,
      title: "Tips for Maintaining Wooden Furniture",
      content:
        "Wooden furniture adds warmth and character to your home. Learn simple maintenance tips to keep it looking great for years to come. Cleaning and polishing tips included.",
      image: blog4,
      author: "Michael Brown",
      date: "2024-11-26",
    },
    {
      id: 5,
      title: "2024's Top Trends in Office Furniture",
      content:
        "Looking to upgrade your workspace? Check out the latest trends in office furniture that combine functionality with style. Ergonomic chairs, modular desks, and more.",
      image: blog5,
      author: "Sophia Davis",
      date: "2024-11-25",
    },
  ];

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div className="text-center text-gray-500 py-20">Post not found.</div>;
  }

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto bg-white overflow-hidden">
        {/* Post Image */}
        <img src={blog.image} alt={blog.title} className="w-full h-72 object-cover" />

        {/* Post Content */}
        <div className="py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</h1>
          <div className="text-sm text-gray-400 mb-6 flex items-center">
            By <span className="mx-2 text-gray-600 font-bold">{blog.author}</span> | {blog.date} | <FaRegComment className="ml-3"/>
          </div>
          <p className="text-gray-600 leading-relaxed">{blog.content}</p>
        </div>

        {/* Author Section */}
        <div className="border-t py-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">About Author</h3>
          <div className="flex items-center space-x-4">
            <img
              src={AuthorImage}
              alt={blog.author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="text-gray-800 font-semibold">{blog.author}</h4>
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo.
              </p>
              <div className="flex py-2 space-x-4 text-2xl text-gray-600">
                <a
                  href="https://facebook.com/taninrahman21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://instagram.com/taninrahman21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com/taninrahman21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://tanin-rahman-portfolio.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  <FaUserCircle />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Blog Button */}
        <div className="border-t p-6 text-center">
          <Link
            to="/blog"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
