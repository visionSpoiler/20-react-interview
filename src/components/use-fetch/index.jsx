import React, { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setError(null);
    } catch (e) {
      setError(`${e}, Some Error Occured`);
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, pending };
};

export default useFetch;
