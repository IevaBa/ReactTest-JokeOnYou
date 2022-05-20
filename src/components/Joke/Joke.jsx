import React from "react";

const Joke = ({ joke, setup, delivery }) => {
  return (
    <div className="joke">{setup || delivery ? setup && delivery : joke}</div>
  );
};
export default Joke;
