import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [isCheckedOne, setIsCheckedOne] = useState(false);
  const [isCheckedTwo, setIsCheckedTwo] = useState(false);
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    axios
      .get("https://api.github.com/users/barbier")
      .then(async function (response) {
        setFetchedData(response.data);
      });
  }, []);

  useEffect(() => {
    if (!fetchedData) return;
    console.log(fetchedData);
  }, [fetchedData]);

  const onChangeOne = () => {
    setIsCheckedOne(!isCheckedOne);
  };
  const onChangeTwo = () => {
    setIsCheckedTwo(!isCheckedTwo);
  };
  return (
    <div>
      <h1>Unit testing - react.js using webpack</h1>
      <label>
        <input
          id="MCP_(S)_|Switch1|"
          type="checkbox"
          checked={isCheckedOne}
          onChange={onChangeOne}
        />
        {isCheckedOne ? "checked" : "unchecked"}
      </label>
      <label>
        <input
          id="MCP_(S) | Switch2|"
          type="checkbox"
          checked={isCheckedTwo}
          onChange={onChangeTwo}
        />
        {isCheckedTwo ? "checked" : "unchecked"}
      </label>
    </div>
  );
}
