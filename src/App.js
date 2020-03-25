import React from "react";
import PreSeat from "./PreSeat";
import PreSeatContextProvider from "./PreSeatContext";

function App() {
  return (
    <div className="App">
      <PreSeatContextProvider>
        <PreSeat />
      </PreSeatContextProvider>
    </div>
  );
}

export default App;
