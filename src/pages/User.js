import { useState } from "react";

const User = ({ Name, Location, Contact }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <h2>{Name}</h2>
      <h3>Location: {Location}</h3>
      <h3>Contact:{Contact}</h3>
    </div>
  );
};

export default User;
