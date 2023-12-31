import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState(1));
  // const value = useState('hello')[0];
  // const func = useState("hello")[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button type="button" onClick={handleClick} className="btn">
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
