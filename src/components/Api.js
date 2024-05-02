//** FETCH API
import React, { useEffect } from "react";

const Api = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <h2>UserId: {data.userId}</h2>
          <h2>Title: {data.title}</h2>
          <h2>Body: {data.body}</h2>
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default Api;
