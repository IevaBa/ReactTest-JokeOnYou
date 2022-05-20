import React from "react";
import Joke from "../Joke/Joke";

import { useState, useEffect } from "react";

const Jokes = () => {
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((res) => res.json())
      .then(
        (result) => {
          //console.log(result);
          setData(result.jokes);
        },
        (error) => {
          //console.log(error);
          setErrorMsg(error.message);
        }
      );
  }, []);
  return (
    <div>
      {errorMsg}
      {data.map((joke, index) => (
        <Joke
          key={index}
          type={joke.type}
          joke={joke.joke}
          setup={joke.setup}
          delivery={joke.delivery}
        />
      ))}{" "}
    </div>
  );
};

export default Jokes;
