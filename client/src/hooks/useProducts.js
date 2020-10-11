import { useState, useEffect } from "react";
import axios from "axios";

function useProducts(url, category) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchProducts = () => {
      setLoading(true);

      axios
        .get(url, {
          baseURL: "http://localhost:1337",
          params: {
            name: category,
          },
          cancelToken: source.token,
        })
        .then((data) => {
          if (Array.isArray(data.data) && data.data.length === 1) {
            setProducts(data.data[0].supplements);
          }
        })
        .catch((error) => {
          setError(true);
        });
    };

    if (category) {
      fetchProducts();
    }

    return () => {
      source.cancel();
    };
  }, [url, category]);

  return [products, loading, error];
}

export default useProducts;
