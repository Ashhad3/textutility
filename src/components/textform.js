import React from 'react'

export default function textform(props) {
    return (
        <>
         <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <div className="form-group">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            onChange={props.textareaClicked}
            id="myBox"
            rows="7"
            value={props.text}
            style={{
              backgroundColor: `${props.mode === "dark" ? "#6a6a6a" : "white"}`,
              color: `${props.mode === "dark" ? "white" : "black"}`,
            }}
          ></textarea>
          <button
            className={`btn btn-outline-${
              props.mode === "dark" ? "light" : "dark"
            } my-2 mx-1`}
            onClick={props.uppercaseClicked}
            type="submit"
          >
            Uppercase to LowerCase
          </button>
          <button
            className={`btn btn-outline-${
              props.mode === "dark" ? "light" : "dark"
            } my-2 mx-1`}
            onClick={props.lowercaseClicked}
            type="submit"
          >
            LowerCase to UpperCase
          </button>
          <button
            className={`btn btn-outline-${
              props.mode === "dark" ? "light" : "dark"
            } my-2 mx-1`}
            onClick={props.copyText}
            type="submit"
          >
            Copy Text
          </button>
          <button
            className={`btn btn-outline-${
              props.mode === "dark" ? "light" : "dark"
            } my-2 mx-1`}
            onClick={props.clearText}
            type="submit"
          >
            Clear Text
          </button>
          <button
            className={`btn btn-outline-${
              props.mode === "dark" ? "light" : "dark"
            } my-2 mx-1`}
            onClick={props.extraSpace}
            type="submit"
          >
            Clear Extra Spaces
          </button>
        </div>
      </div>
      <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <h1>Your Text Summary</h1>
        <p>
          {
            props.text.split("/s+/").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {props.text.length} alphabets
        </p>
        <p>
          {0.008 *
            props.text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Needed to read this text.
        </p>
      </div>
      <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <h2>Preview</h2>
        <p>{props.text.length > 0 ? props.text : "Enter Something to preview it here"}</p>
      </div>
   
        </>
    )
}
