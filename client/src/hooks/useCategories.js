import { useState, useEffect } from "react";
import axios from "axios";

function useCategories() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCategories = () => {
      axios
        .get("/categories", {
          baseURL: "http://localhost:1337",
        })
        .then((data) => {
          if (Array.isArray(data.data)) {
            setCategories(data.data);
          } else {
            throw Error("Categories needs to be of type Array.");
          }
        })
        .catch((error) => {
          setError(true);
        });
    };

    fetchCategories();
  }, []);

  return [categories, error];
}

export default useCategories;
