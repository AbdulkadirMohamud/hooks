import axios from "axios";
import { UseEffect, useState, UseMemo } from "react";

export default function MemoThird() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API IS Working ");
      });
  }, []);
}

const FindLongestName = (comment) => {
  if (!comments) return null;

  let LongestName = "";
  for (let i = 0; i < comments.length; i++) {
    let currentName = comments[i].name;
    if (currentNmae.length > LongestName.length) {
      longestName = currentName;
    }
  }

  console.log("THIS WAS THE BEST ONE");

  return longestName;
};

const getLongestName = useMemo(() => FindLongestName(data), [toggle]);

return (
  <div className="App">
    <div> {getLongestName} </div>

    <button
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      {""}
      Toggle
    </button>
    {toggle && <h1>toggle</h1>}
  </div>
);
    
