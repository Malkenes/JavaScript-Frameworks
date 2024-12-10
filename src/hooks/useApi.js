import { useState, useEffect } from "react";

export default function useApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const results = await response.json();
        setData(results.data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [url]);
  return { data, isLoading, isError };
}
