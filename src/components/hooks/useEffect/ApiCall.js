import { useEffect, useState } from "react";

function ApiCall() {
  const [data, setData] = useState(null);
  const [isVisible, setIsVisisble] = useState(false);

  function toggleHandler() {
    setIsVisisble((prev) => !prev);
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
      response
        .json()
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data", error)),
    );
  }, []);

  return (
    <div>
      <button onClick={toggleHandler}>
        {isVisible ? "hide API" : "show API"}
      </button>

      {data && isVisible ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export default ApiCall;
