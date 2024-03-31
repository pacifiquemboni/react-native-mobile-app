import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': 'f4a05a3abcmsh776c7ff490fc2e5p19d84fjsn93f9e296c089',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.request(options);
        setData(response.data.data);
      } catch (error) {
        setError(error);
        alert("There is an error while fetching");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const refetch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      setError(error);
      alert("There is an error while refetching ");
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
