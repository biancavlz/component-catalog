import { useEffect, useState } from "react";

function ApiCallWithProps({ postId }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setData(data);

        isloading(false);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, [postId, isloading]);

  if (isloading) return <p>Loading data ...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return <p>title: {data && data.title}</p>;
}

export default ApiCallWithProps;
