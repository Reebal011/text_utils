import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperCaseButton = () => {
    //console.log("Upper Click " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };

  const handleLowerCaseButton = () => {
    //console.log("Lower Click " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };

  const handleClearCaseButton = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is clear", "success");
  };

  const handleCopyButton = () => {
    // let newText = document.getElementById("myBox");
    // newText.select();
    // navigator.clipboard.writeText(newText.value);
    // document.getSelection().removeAllRanges();
    // props.showAlert("Copied", "success");

    navigator.clipboard.writeText(text);
    props.showAlert("Copied", "success");
  };

  const handleExtraSpaceButton = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces remove", "success");
  };

  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="5"
            placeholder="Enter Text Here...!!!"
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor:
                props.mode === "dark" ? "rgb(33 37 41 / 80%)" : "white",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpperCaseButton}
        >
          UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowerCaseButton}
        >
          LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearCaseButton}
        >
          ClearText
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyButton}
        >
          CopyText
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaceButton}
        >
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2> Your Text Summary</h2>
        <p>
          <b>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          words and <b>{text.length}</b> characters
        </p>
        <p>
          <b>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}
          </b>{" "}
          minutes to read
        </p>
        <h2> Preview </h2>
        <p>
          {text.length > 0 ? text : "Enter something in text box to preview"}
        </p>
      </div>
    </>
  );
}
