import { useState, useEffect } from "react";
import axios from "axios";
import api from "../service/api.js";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("get data");
      console.log(api + url);
      try {
        const response = await axios.get(api + url);
        setData(response.data);
        console.log(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [api + url]);

  return { data, loading, error };
};

export default useFetchData;
