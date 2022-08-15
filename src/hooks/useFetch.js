import { useEffect, useState } from "react";
import { userId } from "../api/Users";
export const useFetch = (func, check) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        if (check) {
          const post = await func();
          setData(post.data);
        } else {
          const id = userId();
          const post = await func(id);
          setData(post.data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [func]);
  return [data, error, loading];
};
