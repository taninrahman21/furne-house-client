import React from "react";

const QuickViewModal = ({ product, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} // Close modal on backdrop click
    >
      <div
        className="bg-white w-[90%] h-[70%] md:h-[55%] max-w-5xl relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal Content */}
        <div className="flex flex-col md:flex-row gap-6 h-full">
          {/* Left Section: Image (Fixed) */}
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="relative h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Section: Product Details (Scrollable) */}
          <div className="md:w-1/2 p-5 py-8 overflow-y-auto h-full">
            <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-xl font-semibold text-gray-700 mb-2">
              ${product.price}
            </p>

            {/* Star Rating */}
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-lg">&#9733;</span>
              <span className="text-yellow-500 text-lg">&#9733;</span>
              <span className="text-yellow-500 text-lg">&#9733;</span>
              <span className="text-yellow-500 text-lg">&#9733;</span>
              <span className="text-yellow-500 text-lg">&#9733;</span>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
                et magnis dis parturient montes nascetur ridiculus mus. Vestibulum
                ultricies aliquam convallis.
              </p>
            </div>

            {/* Dropdowns for Color and Material */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label
                  htmlFor="color"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Color
                </label>
                <select
                  id="color"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                >
                  <option>Choose an option</option>
                  <option>Red</option>
                  <option>Black</option>
                  <option>Blue</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="material"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Material
                </label>
                <select
                  id="material"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                >
                  <option>Choose an option</option>
                  <option>Leather</option>
                  <option>Wood</option>
                  <option>Plastic</option>
                </select>
              </div>
            </div>

            <div className="flex items-center mb-6 border text-base">
              {/* Quantity Section */}
              <div className="flex items-center pl-3 gap-2 border-gray-300 overflow-hidden w-2/4">
                <h1>Quantity</h1>
                <button className="px-3 w-full py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">
                  -
                </button>
                <p className="px-2">1</p>
                <button className="px-3 py-2 w-full text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <div className="w-2/4">
                <button className="w-full bg-black text-white px-10 py-2 hover:bg-gray-800 transition-all">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Wishlist Link */}
            <p className="text-gray-500 text-sm">
              <button className="flex items-center gap-2">
                &#9825; Add to Wishlist
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
