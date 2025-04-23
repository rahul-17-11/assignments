import React, { useEffect, useState } from "react";
import { useFetchProducts } from "../context/ProductProvider";
import ProductCard from "./ProductCard";

const URL = import.meta.env.API_URL;
const ProductList = () => {
  const { fetchProducts, productList } = useFetchProducts();
  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchProducts(
      `https://dummyjson.com/products/${query ? `search?q=${query}` : ""}`
    );
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <input
        className="p-3 border-2 mx-auto border-sky-600 focus:border-sky-800 rounded-sm text-slate-700"
        placeholder="Search..."
        onChange={(e) => setInput(e.target.value)}
      />{" "}
      <button
        className="ml-2 p-3 bg-sky-400 text-white hover:bg-sky-700 rounded-md"
        onClick={() => setQuery(input)}
      >
        Search
      </button>
      {productList.length === 0 ? (
        <div className="text-center text-gray-500">No products found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productList.map((product) => (
            <div key={product.id} className="flex justify-center">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-3 bg-cyan-600 text-white font-medium rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors duration-300">
          Load More
        </button>
      </div>
    </div>
  );
};

export default ProductList;
