import React from "react";
import PreSeat from "./PreSeat";
import DataContextProvider from "./DataContext";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <PreSeat />
      </DataContextProvider>
    </div>
  );
}

export default App;
