import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AuthorImage from '../../assets/authorImage.png';
import blog1 from '../../assets/blogs/blog1.png';
import blog2 from '../../assets/blogs/blog2.png';
import blog3 from '../../assets/blogs/blog3.png';
import blog4 from '../../assets/blogs/blog4.png';
import blog5 from '../../assets/blogs/blog5.png';
import aboutUsBanner from '../../assets/aboutUs/banner.png';

const Blog = () => {
  const navigate = useNavigate();
  const blogs = [
    {
      id: 1,
      title: "Top 5 Sofa Designs for Your Living Room",
      description:
        "Explore the latest sofa designs to elevate your living room decor. From modern minimalism to cozy classics, find the perfect fit for your space.",
      image: blog1,
      author: "Jane Doe",
      date: "2024-11-29",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Dining Table",
      description:
        "A dining table is the heart of every home. Learn how to pick the right size, style, and material to match your dining room.",
      image: blog2,
      author: "John Smith",
      date: "2024-11-28",
    },
    {
      id: 3,
      title: "5 Must-Have Bedroom Furniture Pieces",
      description:
        "Transform your bedroom into a cozy retreat with these essential furniture pieces. Discover functional and stylish options for every budget.",
      image: blog3,
      author: "Emily Johnson",
      date: "2024-11-27",
    },
    {
      id: 4,
      title: "Tips for Maintaining Wooden Furniture",
      description:
        "Wooden furniture adds warmth and character to your home. Learn simple maintenance tips to keep it looking great for years to come.",
      image: blog4,
      author: "Michael Brown",
      date: "2024-11-26",
    },
    {
      id: 5,
      title: "2024's Top Trends in Office Furniture",
      description:
        "Looking to upgrade your workspace? Check out the latest trends in office furniture that combine functionality with style.",
      image: blog5,
      author: "Sophia Davis",
      date: "2024-11-25",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  return (
    <div className="pb-6">

      {/* Banner Section */}
      <div className="flex h-[150px] md:h-[220px] lg:h-[350px] items-center pt-4">
        <div className='h-full w-full'>
          <img className='w-full h-full' src={aboutUsBanner} alt="" />
        </div>
        <div className='bg-[#e3e3e3] w-full h-full flex items-center'>
          <h1 className="text-3xl md:text-6xl font-bold text-black">Blog</h1>
        </div>
      </div>

      {/* Blog List & Sidebar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 w-full md:w-10/12 lg:w-full xl:w-10/12 mx-auto"
      >
        {/* Blog Posts Section */}
        <div className="space-y-5 lg:space-y-10 col-span-3">
          {currentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col first-line bg-white overflow-hidden"
              onClick={() => navigate(`/blog/${blog?.id}`)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto max-h-[500px] object-cover"
              />
              <div className="py-5">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">{blog.description.slice(0, 100)}...</p>
                <div className="text-sm text-gray-400 mb-4">
                  By {blog.author} | {blog.date}
                </div>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={`text-xl ${currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:text-black"
                }`}
              disabled={currentPage === 1}
            >
              &#x2039; {/* Left Arrow */}
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`text-lg px-2 ${index + 1 === currentPage
                  ? "text-black font-bold border-b-2 border-black"
                  : "text-gray-500 hover:text-black"
                  }`}
              >
                {index + 1}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className={`text-xl ${currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:text-black"
                }`}
              disabled={currentPage === totalPages}
            >
              &#x203A; {/* Right Arrow */}
            </button>
          </div>

        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Author Section */}
          <div className="bg-white">
            <h3 className="text-lg font-bold text-gray-800 mb-4">About Author</h3>
            <img
              src={AuthorImage}
              alt="Author"
              className="w-full h-[250px]"
            />
            <p className="text-gray-400 mt-2 text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci.
            </p>
          </div>

          {/* Categories Section */}
          <div className="my-5">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Categories</h3>
            <ul className="space-y-2 text-sm">
              {["Artistic", "Crafting", "Creative", "Decoration", "Home Decor", "Interior Design"].map(
                (category, index) => (
                  <li
                    key={index}
                    className="text-gray-500 "
                  >
                    {category}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="bg-white">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://portfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black text-2xl"
              >
                <FaUserCircle />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
