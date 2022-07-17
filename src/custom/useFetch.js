import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const abortController = new AbortController();
  const signal = abortController.signal;
  const option = {};

  useEffect(() => {
    try {
      setIsPending(true);
      (async () => {
        const res = await fetch(url, { ...option }, signal);
        if (signal.aborted) {
          setIsPending(true);
          throw Error("Fetching data aborted!");
        } else {
          if (!res.ok) {
            throw Error("Sorry we can`t find data!");
          } else {
            const data = await res.json();
            setIsPending(true);
            setResponse(data);
          }
        }
      })();
      return () => {
        abortController.abort();
      };
    } catch (err) {
      if (err) {
        setIsPending(true);
        setError(err.message);
      }
    }
  }, [url]);

  return [response, error, isPending];
};

export default useFetch;
