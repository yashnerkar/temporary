import React from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router";
const Editexpense = (props) => {
const { id} = useParams();
  console.log("id", id);
 return( <div>
    <h3> Editing the expense with id of{id} </h3>{" "}
  </div>
  );

 };

export default Editexpense;
