// for installing npm modules.
// install->import->use
// stateless functional component
// statefull component
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/Approuter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";



ReactDOM.render(<AppRouter/>, document.getElementById("app"));
