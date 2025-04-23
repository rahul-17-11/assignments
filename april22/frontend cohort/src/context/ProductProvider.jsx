import { createContext, useContext, useState } from "react";
import axios from "axios";

const ProductContext = createContext();

export const useFetchProducts = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [favList, setFavList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  async function fetchProducts(URL) {
    try {
      setLoading(true);
      const res = await axios.get(URL);
      setProductList(res.data.products || []);
      setLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ProductContext.Provider
      value={{
        productList,
        setProductList,
        fetchProducts,
        loading,
        error,
        favList,
        setFavList,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
