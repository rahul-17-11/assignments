import { useEffect, useState } from "react";
import axios from "axios";

const useCharacterFetch = (url) => {
  let [characters, setCharacters] = useState([]);
  let [loading, setLoading] = useState(null);
  let [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      let res = await axios.get(url);
      setCharacters(res.data.results || []);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return { characters, error, loading };
};

export default useCharacterFetch;
