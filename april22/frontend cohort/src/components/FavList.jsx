import { useFetchProducts } from "../context/ProductProvider";
import ProductCard from "./ProductCard";

const URL = import.meta.env.API_URL;
const FavList = () => {
  const { favList } = useFetchProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      {favList.length === 0 ? (
        <div className="text-center text-gray-500">No products found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favList.map((product) => (
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

export default FavList;
