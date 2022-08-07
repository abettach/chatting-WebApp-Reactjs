import axios from "axios";
import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  const fetchData = (api) => {
    axios
      .get(api)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  };
  useEffect(() => {
    fetchData(url);
  }, []);
  return { data, loading, error };
};

export default useFetch;
