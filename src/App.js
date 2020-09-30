import React, { useState } from "react";
import "./styles.css";
import Card from "./card";
import Note from "./note";
import Header from "./header";
export default function App() {
  let [additem, setitem] = useState([]);
  function addnote(a) {
    if (a.title === "") {
      return alert("Please Enter Title!!");
    }
    if (a.content === "") {
      return alert("There is no content");
    } else {
      setitem((pre) => {
        return [...pre, a];
      });
    }
  }
  function ondelete(id) {
    setitem((predata) =>
      predata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  }
  return (
    <>
      <Header />
      <Card passnote={addnote} />
      <div className="App">
        {additem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={ondelete}
            />
          );
        })}
      </div>
    </>
  );
}
