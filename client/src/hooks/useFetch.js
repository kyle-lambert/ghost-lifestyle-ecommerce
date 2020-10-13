import React from "react";
import axios from "axios";

const BASE_URL = "http://localhost:1337";

function useFetch(options = {}) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      axios(options)
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(true);
          setLoading(false);
        });
    };
  });
}

export default useFetch;
