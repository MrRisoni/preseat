import React from "react";
import ReactDOM from "react-dom";
import PreSeat from "./PreSeat";
import "./index.css";
import DataContextProvider from './DataContext';


ReactDOM.render(    <DataContextProvider>
    <PreSeat />
    </DataContextProvider>, document.getElementById("root"));
