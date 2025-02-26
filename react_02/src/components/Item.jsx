import { useState } from "react";

export default function Item({ title }) {
   const[val,setVal] = useState(title);
  const handleChange = () => {
    // title = "Hello";
    setVal("Hello");
  };
  return (
    <div>
      {val} <br />
      <button onClick={handleChange}>chnage text</button>
    </div>
  );
}
