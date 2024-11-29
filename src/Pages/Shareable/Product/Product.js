import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import p1 from '../../../assets/products/p1.png';
import p2 from '../../../assets/products/p2.png';
import p3 from '../../../assets/products/p3.png';
import p4 from '../../../assets/products/p4.png';
import p5 from '../../../assets/products/p5.png';
import p6 from '../../../assets/products/p6.png';
import { FiHeart } from 'react-icons/fi';

const Product = () => {
  const { id } = useParams();
  
  const products = [
    {
      id: 1,
      name: 'Zenso Lounge',
      price: 199.0,
      originalPrice: 400.0,
      ratings: 4,
      images: [p1, p2, p3, p4],
      category: 'Chairs & Benches',
      measurements: '17 1/2×20 5/8 ″',
      color: 'Brown',
      description:
        'ZENSO LOUNGE stands apart through its level of comfort which it provides despite its compact size. It is inviting and expressive. The sturdy solid wood frame appears light thanks to its cross construction.',
      sku: '1117',
    },
    {
      id: 2,
      name: 'Kuyu Desk',
      price: 232.9,
      ratings: 4,
      images: [p2],
      category: 'Desks',
      measurements: '17 1/2×20 5/8 ″',
      color: 'Brown',
      description:
        'ZENSO LOUNGE stands apart through its level of comfort which it provides despite its compact size. It is inviting and expressive. The sturdy solid wood frame appears light thanks to its cross construction.',
      sku: '1117',
    },
    {
      id: 3,
      name: 'Neat Noon',
      price: 159.9,
      ratings: 4,
      images: [p3],
      category: 'Tables',
      measurements: '17 1/2×20 5/8 ″',
      color: 'Brown',
      description:
        'ZENSO LOUNGE stands apart through its level of comfort which it provides despite its compact size. It is inviting and expressive. The sturdy solid wood frame appears light thanks to its cross construction.',
      sku: '1117',
    },
    {
      id: 4,
      name: 'Neat Noon',
      price: 159.9,
      ratings: 4,
      images: [p4],
      category: 'Tables',
      measurements: '17 1/2×20 5/8 ″',
      color: 'Brown',
      description:
        'ZENSO LOUNGE stands apart through its level of comfort which it provides despite its compact size. It is inviting and expressive. The sturdy solid wood frame appears light thanks to its cross construction.',
      sku: '1117',
    },
    {
      id: 5,
      name: 'Neat Noon',
      price: 159.9,
      ratings: 4,
      images: [p5],
      category: 'Tables',
      measurements: '17 1/2×20 5/8 ″',
      color: 'Brown',
      description:
        'ZENSO LOUNGE stands apart through its level of comfort which it provides despite its compact size. It is inviting and expressive. The sturdy solid wood frame appears light thanks to its cross construction.',
      sku: '1117',
    },
    {
      id: 6,
      name: 'Neat Noon',
      price: 159.9,
      ratings: 4,
      images: [p6],
      category: 'Tables',
      measurements: '17 1/2×20 5/8 ″',
      color: 'Brown',
      description:
        'ZENSO LOUNGE stands apart through its level of comfort which it provides despite its compact size. It is inviting and expressive. The sturdy solid wood frame appears light thanks to its cross construction.',
      sku: '1117',
    },
  ];

  // Find the product by ID
  const product = products.find((product) => product.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product.images[0]);
  if (!product) {
    return <div className="text-center">Product not found.</div>;
  };



  return (
    <div>
      <p className="text-gray-600 mb-2">
        Home &gt; Shop &gt; {product.category} &gt; <span className="font-semibold text-black">{product.name}</span>
      </p>
      <div className="py-4 flex flex-col lg:flex-row gap-10">
        {/* Product Images */}
        <div className="w-full lg:w-2/4 xl:w-2/5">
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-auto max-h-[600px]"
          />
          <div className="flex gap-2 mt-4">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                onClick={() => setMainImage(img)} // Set the clicked image as the main image
                className={`w-20 md:w-full lg:w-20 h-20 md:h-28 lg:h-20 object-cover rounded-md cursor-pointer border ${mainImage === img ? 'border-black' : 'hover:border-black'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-2/4 xl:w-1/4">
          <div className='flex gap-2 items-center text-base'>
            <p>******</p>
            <p>11 reviews</p>
          </div>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-sm text-gray-500">{product.category}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-2xl font-bold">${product.price}</span>
            <span className="text-sm line-through text-gray-500">${product.originalPrice}</span>
            <span className="text-sm text-green-500">-50%</span>
          </div>
          <p className="mt-4 text-[#52667A]">{product.description}</p>

          {/* Measurements and Color */}
          <div className="mt-6">
            <p className="text-sm font-medium">Measurements:</p>
            <p>{product.measurements}</p>
            <div className="mt-4">
              <p className="text-sm font-medium">Choose Color:</p>
              <span className="inline-block w-6 h-6 rounded-full bg-brown-500 border border-gray-300"></span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-center">
              <div className='flex items-center border w-2/5'>
                <button className="px-4 py-2">-</button>
                <span className="px-4">1</span>
                <button className="px-4 py-2">+</button>
              </div>
              <button className="w-full px-5 py-2 ml-3 border border-gray-300 flex gap-2 items-center justify-center">
                <FiHeart />
                Wishlist
              </button>
            </div>
           
            <button className="px-4 py-2 bg-black text-white">Add to Cart</button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-sm text-gray-500">
            <p>SKU: {product.sku}</p>
            <p>Category: {product.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
