import React from "react";
import { useFetchProducts } from "../context/ProductProvider";

const ProductCard = ({ product }) => {
  const { setFavList } = useFetchProducts();

  function addFav(product) {
    setFavList((prev) => [...prev, product]);
  }
  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage)
  ).toFixed(2);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:shadow-xl transition-shadow duration-300">
      <div className="md:flex">
        <div className="md:shrink-0">
          <div
            className="h-48 w-full md:h-full md:w-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${product.thumbnail})` }}
          ></div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <div className="uppercase tracking-wide text-sm text-cyan-600 font-semibold">
                {product.brand}
              </div>
              <h1 className="mt-1 text-xl font-bold text-gray-900">
                {product.title}
              </h1>
            </div>
            <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {product.category}
            </span>
          </div>

          <p className="mt-3 text-gray-600 text-sm line-clamp-3">
            {product.description}
          </p>

          <div className="mt-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "text-cyan-500"
                      : "text-gray-300"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              ))}
              <span className="ml-1 text-sm text-gray-500">
                ({product.rating})
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
              {product.discountPercentage > 0 ? (
                <div className="flex items-end">
                  <span className="text-2xl font-bold text-cyan-700">
                    ${discountedPrice}
                  </span>
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    ${product.price}
                  </span>
                  <span className="ml-2 text-xs bg-cyan-500 text-white px-1.5 py-0.5 rounded">
                    {Math.round(product.discountPercentage * 100)}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-cyan-700">
                  ${product.price}
                </span>
              )}
            </div>

            <div className="flex space-x-2">
              <span
                className={`px-2 py-1 text-xs rounded ${
                  product.stock > 0
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {product.stock > 0
                  ? `In Stock (${product.stock})`
                  : "Out of Stock"}
              </span>
            </div>
          </div>

          <div className="mt-6 flex space-x-2">
            <button
              onClick={() => addFav(product)}
              className="px-4 py-2 bg-cyan-600 text-white text-sm font-medium rounded hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors duration-300"
            >
              Add to Favourite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
