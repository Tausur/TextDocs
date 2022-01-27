import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");


  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox-1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success");
  };

  const handleClearClick = (event) => {
    setText("");
    // props.showAlert("Text cleared" , "success")
  };

  const handleOnceClick = (event) => {
    let newText = text.substr(0, text.length - 1);
    setText(newText);
    // props.showAlert("Cleared a word" , "success")
  };
  
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 mb-3>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="myBox-1"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#051727",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleDownClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" id="copyText" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleOnceClick}>
          Clear once
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleClearClick}>
          Clear All
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          Your text has {text.split(" ").filter((element)=>{return element.length!==0}).length} words and has {text.length} characters.
        </p>
        <p>This text can be read with in {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes.</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
