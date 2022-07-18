import React from "react";

function About(props) {
  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1>About Us</h1>
    </div>
  );
}

export default About;
