import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pageNum, setPageNum] = useState(0);
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const goBack = () => {
    setPageNum((prev) => Math.max(0, prev - 10));
  };

  const goForward = () => {
    setPageNum((prev) => Math.min(limit - 10, prev + 10));
  };

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${pageNum}`
      );
      setProducts(res.data.products || []);
      setLimit(res.data.total);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [pageNum]);

  return (
    <div className="flex flex-col items-center space-y-6 px-4 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Product List</h1>

      {isLoading ? (
        <p className="text-lg text-gray-600 font-semibold">Loading...</p>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full sm:w-48 h-48 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  {product.description}
                </p>
                <div className="text-sm text-gray-700 mb-2">
                  <p>
                    <strong>Brand:</strong> {product.brand}
                  </p>
                  <p>
                    <strong>Price:</strong> ${product.price}
                  </p>
                  <p>
                    <strong>Discount:</strong> {product.discountPercentage}%
                  </p>
                  <p>
                    <strong>Rating:</strong> {product.rating} ⭐
                  </p>
                  <p>
                    <strong>Stock:</strong> {product.stock}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 my-2">
                  {product.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  <p>Category: {product.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      {/* Pagination Controls */}
      <div className="flex text-4xl gap-8 items-center justify-center">
        <span
          onClick={goBack}
          className={`${
            pageNum <= 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          ⬅️
        </span>
        <span className="text-lg font-semibold">
          Page {Math.floor(pageNum / 10) + 1}
        </span>
        <span
          onClick={goForward}
          className={`${
            pageNum >= limit - 10
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          ➡️
        </span>
      </div>
    </div>
  );
}

export default App;
