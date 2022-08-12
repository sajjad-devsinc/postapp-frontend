import { useEffect, useState } from "react";

export const useFetch = (func) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const post = await func;
        setData(post.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getData;
  }, [func]);

  return { data, error, loading };
};
