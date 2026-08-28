export const apiCallCode = `
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
`;

export const apiCallWithPropsCode = `
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
          \`https://jsonplaceholder.typicode.com/posts/\${postId}\`,
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
`;

export const searchTermCode = `
import { useEffect, useState } from "react";

function SearchTerm({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function search() {
      const response = await fetch(
        \`https://jsonplaceholder.typicode.com/comments?postId=\${query}\`,
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
`;

export const countTimerCode = `
import { useEffect, useState } from "react";

function CountTimer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      console.log("Stopped after 5 seconds");
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return <div>count: {count}</div>;
}

export default CountTimer;
`;

export const resizeWindowCode = `
import { useEffect, useState } from "react";

function ResizeWindow() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <p>width: {windowSize.width}</p>
      <p>height: {windowSize.height}</p>
    </div>
  );
}

export default ResizeWindow;
`;

export const pullApiCallCode = `
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
`;

export const localStorageNameCode = `
import { useEffect, useState } from "react";

function LocalStorageName() {
  const [keyNameValue, setKeyNameValue] = useState(() => {
    return localStorage.getItem("name" || "");
  });

  useEffect(() => {
    localStorage.setItem("name", keyNameValue);
  }, [keyNameValue]);

  return (
    <div>
      <input
        type="text"
        value={keyNameValue}
        onChange={(e) => setKeyNameValue(e.target.value)}
      />
      <p>Your storage key pair value is: 'name': {keyNameValue}</p>
    </div>
  );
}

export default LocalStorageName;
`;

export const messageByConditionCode = `
import { useEffect, useState } from "react";

function MessageByCondition() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count > 5) {
      setMessage("You reach 5");
    }
  }, [count]);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{message}</p>
    </div>
  );
}

export default MessageByCondition;
`;

export const userProfileCode = `
import { useEffect, useState } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          \`https://jsonplaceholder.typicode.com/users/\${userId}\`,
        );

        if (!response.ok) {
          throw new Error(\`HTTP Error: \${response.status}\`);
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!user) {
    return <p>No user found.</p>;
  }

  return (
    <div>
      <p>user name: {user.name}</p>
      <p>user email {user.email}</p>
    </div>
  );
}

export default UserProfile;
`;

export const countDownTimerCode = `
import { useEffect, useState } from "react";

function CountDownTimer({ initialCount }) {
  const [count, setCount] = useState(Number(initialCount));

  useEffect(() => {
    if (count === 0) return;

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div>
      <p>{count === 0 ? "Time's up!" : \`Count down: \${count}\`}</p>
    </div>
  );
}

export default CountDownTimer;
`;

export const paginatedDataCode = `
import React, { useEffect, useState } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const LIMIT = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          \`https://jsonplaceholder.typicode.com/posts?_page=\${page}&_limit=\${LIMIT}\`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page]);

  return (
    <div>
      <h2>Posts - Page {page}</h2>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.title}</strong>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1 || loading}
        >
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>Current Page: {page}</span>

        <button onClick={() => setPage((prev) => prev + 1)} disabled={loading}>
          Next
        </button>
      </div>
    </div>
  );
}
`;
