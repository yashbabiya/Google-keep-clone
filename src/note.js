import React from "react";
import "./styles.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
export default function Note(props) {
  function deleted() {
    props.deleteItem(props.id);
  }
  return (
    <div className="note">
      <div className="ncard">
        <h1>{props.title}</h1>
        <p className="cont">{props.content}</p>
        <br />
        <div className="contbtm">
          <DeleteOutlineIcon onClick={deleted} id="del" />
        </div>
      </div>
    </div>
  );
}
