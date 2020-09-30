import React, { useState } from "react";

import "./styles.css";
import AddIcon from "@material-ui/icons/Add";
export default function Card(props) {
  let [a, seta] = useState({
    title: "",
    content: ""
  });

  function write(s) {
    const { value, name } = s.target;
    seta((prevdata) => {
      return {
        ...prevdata,
        [name]: value
      };
    });
  }

  function sub() {
    props.passnote(a);
    seta({
      title: "",
      content: ""
    });
  }
  return (
    <div className="card">
      <div className="inp">
        <input
          onChange={write}
          value={a.title}
          name="title"
          placeholder="Title"
          autoCorrect="off"
        />
        <br />
        <br />
        <textarea
          onChange={write}
          value={a.content}
          name="content"
          placeholder="Write a note..."
        />
        <br />

        <br />
        <div className="down">
          <AddIcon onClick={sub} id="add" />
        </div>
      </div>
    </div>
  );
}
