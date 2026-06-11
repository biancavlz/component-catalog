import { useEffect, useState } from "react";

function PullApiCall() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
        response
          .json()
          .then((data) => setData(data))
          .catch((err) => setError(err)),
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {error && <p>Error fetching data: {error.message}</p>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>No data</p>}
    </div>
  );
}

export default PullApiCall;
