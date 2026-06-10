import { useEffect, useState } from "react";

function SearchTerm({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function search() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${query}`,
      );
      const data = await response.json();
      setResults(data);
    }

    if (query) {
      search();
    }
  }, [query]);

  return (
    <div>
      {results.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default SearchTerm;
