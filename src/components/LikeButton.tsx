import React, { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((prev) => prev + 1);
    // setCount(count + 1);
  }
  return <button className="likeButton" onClick={handleClick}>♥ {count}</button>;
}

export default LikeButton;
