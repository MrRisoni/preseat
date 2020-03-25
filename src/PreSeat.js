import React, { Component } from "react";
const seatMaps = require("./seatMap");
import SegmentTabs from "./SegmentTabs";
import PriceBox from "./PriceBox";
import { DataContext } from "./DataContext";

class PreSeat extends Component {
  static contextType = DataContext;

  render() {
    return (
      <main>
        <PriceBox />

        <SegmentTabs stmp={seatMaps} />
      </main>
    );
  }
}

export default PreSeat;
