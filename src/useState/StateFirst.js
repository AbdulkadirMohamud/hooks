import React from "react";

const StateFirst = () => {
  const [inputValue, setInputValue] = useState("Abdulkadir");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something you like ..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateFirst;
