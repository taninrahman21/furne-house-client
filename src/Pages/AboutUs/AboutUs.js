import React from "react";
import { FaStore } from "react-icons/fa";
import about2 from '../../assets/aboutUs/about1.png';
import about3 from '../../assets/aboutUs/about2.png';
import aboutUsBanner from '../../assets/aboutUs/banner.png';
import advertisement2 from '../../assets/advertisement2.png';

const AboutUs = () => {
  return (
    <div className="pb-6">

      {/* Banner Section */}
      <div className="flex h-[150px] md:h-[220px] lg:h-[350px] items-center">
        <div className='h-full w-full'>
          <img className='w-full h-full' src={aboutUsBanner} alt="" />
        </div>
        <div className='bg-[#e3e3e3] w-full h-full flex items-center'>
          <h1 className="text-3xl md:text-6xl font-bold text-black">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex w-full lg:w-[80%] flex-col xl:flex-row mx-auto gap-10 items-center py-10">
        {/* Image Section */}
        <div className="w-full">
          <img
            src={about2}
            alt="Store"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div>
          {/* Heading Section */}
          <div className="mb-4 flex items-center space-x-2">
            <div className=" text-[#39cc8a]">
              <FaStore className="w-6 h-6" />
            </div>
            <span className="text-[#39cc8a] font-semibold">About Store</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore Stylish and Comfortable Furniture for Every Home
          </h2>

          {/* Subtitle */}
          <p className="text-gray-600 mb-4">
            Our furniture collection blends elegance and functionality to elevate your living spaces.
          </p>

          {/* Description */}
          <div className="">
            <p className="text-gray-600">
              Discover a wide range of premium furniture designed to fit every style and budget. From cozy sofas to stylish dining sets, we offer a variety of options that enhance comfort and add charm to your home. With our curated designs, transform any room into a space that reflects your personality and taste.
            </p>
          </div>

        </div>
      </div>


      {/* Content Section */}
      <div className="flex w-full lg:w-[80%] flex-col-reverse xl:flex-row mx-auto gap-10 items-center py-10">
        <div>
          {/* Title */}
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
            Transforming Homes with Elegant Furniture and Interior Design
          </h2>

          {/* Description */}
          <div className="">
            <p className="text-gray-600">
              At [Your Store Name], we’re more than just a furniture store — we’re your partners in creating stunning living spaces. Our curated furniture collection is designed to bring both comfort and elegance to your home. From sleek modern styles to timeless classics, we have pieces to suit every taste and personality.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full">
          <img
            src={advertisement2}
            alt="Interior Design"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>


      {/* Content Section */}
      <div className="flex w-full lg:w-[80%] flex-col xl:flex-row mx-auto gap-10 items-center py-10">
        <div className="w-full">
          <img
            src={about3}
            alt="Furne House Store"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div>
          {/* Title */}
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800 mb-4">
            Furne House: A Journey of Redefining Homes with Style and Comfort
          </h2>

          {/* Description */}
          <div className="">
            <p className="text-gray-600">
              Established in 2010, **Furne House** started as a small family-owned business with a vision to provide high-quality, stylish furniture that meets the diverse needs of modern homes. From humble beginnings, our passion for excellence and commitment to customer satisfaction helped us grow into a trusted name in the furniture industry.
              <br /><br />
              Over the years, Furne House has become synonymous with exceptional craftsmanship, innovative designs, and unparalleled service. We’ve expanded our offerings to include not only a wide range of premium furniture but also interior design solutions that transform spaces into stunning, functional homes.
              <br /><br />
              Today, we are proud to have helped countless customers create the homes of their dreams. Whether you're furnishing a cozy apartment or designing your dream home, **Furne House** is here to make your vision a reality. Experience our dedication to quality, style, and comfort as we continue to redefine modern living.
            </p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default AboutUs;
