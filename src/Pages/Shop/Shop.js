import React, { useState } from 'react';
import { FiHeart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import categoriesBanner from '../../assets/products/noveltiesBanner.png';
import p1 from '../../assets/products/p1.png';
import p2 from '../../assets/products/p2.png';
import p3 from '../../assets/products/p3.png';
import p4 from '../../assets/products/p4.png';
import p5 from '../../assets/products/p5.png';
import p6 from '../../assets/products/p6.png';
import QuickViewModal from './QuickViewModal';

const Shop = () => {
  const navigate = useNavigate();
  const [quickViewProduct, setQuickViewProduct] = useState(null); // Selected product for Quick View
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productsSortBy, setProductsSortBy] = useState({
    category: "Novelties",
    price: [0, 800],
    sortOption: "default"
  });
  const [priceRange, setPriceRange] = useState([0, 800])


  const products = [
    {
      id: 1,
      name: '1.3 Chair',
      price: 69.9,
      ratings: '4',
      image: p1,
      categories: 'Chair & Benches',
      categoriesImage: categoriesBanner,
    },
    {
      id: 2,
      name: 'Kuyu Desk',
      price: 232.9,
      ratings: '4',
      image: p2,
      categories: 'Chair & Benches',
      categoriesImage: categoriesBanner,
    },
    {
      id: 3,
      name: 'Neat Noon',
      price: 159.9,
      ratings: '4',
      image: p3,
      categories: 'Tables',
      categoriesImage: categoriesBanner,
    },
    {
      id: 4,
      name: '1.3 Chair',
      price: 120.9,
      ratings: '4',
      image: p4,
      categories: 'Tables',
      categoriesImage: categoriesBanner,
    },
    {
      id: 5,
      name: 'Morph',
      price: 99.9,
      ratings: '4',
      image: p5,
      categories: 'Sofas',
      categoriesImage: categoriesBanner,
    },
    {
      id: 6,
      name: '1.3 Chair',
      price: 122.9,
      ratings: '4',
      image: p6,
      categories: 'Beds',
      categoriesImage: categoriesBanner,
    },
  ];

  const categories = [
    'Novelties',
    'Chair & Benches',
    'Tables',
    'Sofas',
    'Beds',
    'Office',
    'Storage & Shelves',
  ];

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setQuickViewProduct(null); // Clear selected product
  };

  // Update the sort state for category
  const handleCategoryChange = (category) => {
    setProductsSortBy((prev) => ({ ...prev, category }));
  };

  // Apply the price filter
  const applyPriceFilter = () => {
    setPriceRange([priceRange[0], priceRange[1]]);
    setProductsSortBy((prev) => ({ ...prev, price: priceRange, sortOption: productsSortBy.sortOption }));
  };

  // Reset the price filter
  const resetPriceFilter = () => {
    setProductsSortBy((prev) => ({ ...prev, price: [0, 800], sortOption: productsSortBy.sortOption }));
  };

  const handleSortChange = (e) => {
    setProductsSortBy({
      ...productsSortBy,
      sortOption: e.target.value, // Update the sort option
    });
  };

  const { category, price } = productsSortBy;

  // Sort products based on selected sort option
  const sortedProducts = () => {
    let sorted = [...products];

    switch (productsSortBy.sortOption) {
      case 'price-low-to-high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-to-low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'latest':
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by latest
        break;
      default:
        break; // No sorting for "default"
    }

    // Now apply price filtering
    return sorted.filter(product => product.price >= price[0] && product.price <= price[1]);
  };

  const filteredProducts = sortedProducts();

  return (
    <div className="pb-6">
      <p className="text-gray-600 mb-2">
        Home &gt; Shop &gt; <span className="font-semibold text-black">{category}</span>
      </p>

      {/* Banner Section */}
      <div className="flex h-[150px] md:h-[220px] lg:h-[350px] items-center">
        <div className='h-full'>
          <img className='w-full h-full' src={categoriesBanner} alt="" />
        </div>
        <div className='bg-[#ebebeb] w-2/4 h-full flex items-center'>
          <h1 className="text-3xl md:text-6xl font-bold text-black">{category}</h1>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row gap-6 py-10 md:py-14 lg:py-20">
        {/* Sidebar: Categories and Filters */}
        <aside className="w-full lg:w-3/12 pr-32">
          {/* Sort By */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Sort By</h2>
            <div className="flex flex-col space-y-2">
              <p className="text-gray-600">{category}
              </p>
              <p className="text-gray-600">
                ${price[0]} - ${price[1]}
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className='mb-10'>
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-2 text-[#9DADBE]">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className={`cursor-pointer hover:text-black ${category === cat ? 'text-black font-semibold text-lg' : ''
                    }`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div className="">
            <h2 className="text-xl font-semibold mb-2">Price</h2>
            <div>
              <input
                type="range"
                className="w-full bg-gray-200 outline-gray-200 rounded-lg h-[2px] focus:outline-none focus:ring-0"
                min="0"
                max="800"
                step="10"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, +e.target.value])}
              />
              <div className="flex justify-between space-x-4">
                <div>
                  <button className="text-black font-bold mr-4" onClick={resetPriceFilter}>
                    Reset
                  </button>
                  <button className="text-black font-bold" onClick={applyPriceFilter}>
                    Apply
                  </button>
                </div>
                <div className='text-gray-500'>
                  <span>$0 - ${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Display */}
        <main className="w-full lg:w-3/4">

          <div className='mb-5'>
            {/* Sort Option Dropdown */}
            <select
              value={productsSortBy.sortOption}
              onChange={handleSortChange}
              className="border border-gray-100 text-gray-800 text-sm font-medium py-2 px-4 focus:outline-none focus:ring-0 bg-white transition-all ease-in-out"
            >
              <option value="default">Default Sorting</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
              <option value="latest">Latest</option>
            </select>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {filteredProducts.map((product, index) => {

              return (
                <div
                  key={index}
                  className="bg-white group cursor-pointer"
                  onClick={() => navigate(`/product/${product?.id}`)} // Navigate to product route
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full object-cover h-[370px] mb-4"
                    />
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-around bg-black bg-opacity-80 w-3/5 h-0 overflow-hidden group-hover:h-8 transition-all duration-300">
                      <div
                        className="w-[80%] text-white text-base font-bold hidden group-hover:flex justify-center"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleQuickView(product);
                        }}
                      >
                        Quick View
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent click event propagation to the parent
                          console.log("Clicked Heart");
                        }}
                        className="text-xl w-[20%] bg-gray-400 hidden group-hover:flex h-full items-center justify-center"
                      >
                        <FiHeart />
                      </button>
                    </div>
                  </div>
                  <p className="text-black text-xl">*****</p>
                  <h3 className="font-bold text-3xl mt-[-10px]">{product.name}</h3>
                  <p className="text-black text-base font-bold">${product.price}</p>
                </div>
              );
            })}
             
            {/* Quick View Modal */}
            {isModalOpen && quickViewProduct && (
              <QuickViewModal product={quickViewProduct} onClose={closeModal} />
            )}
            
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;
