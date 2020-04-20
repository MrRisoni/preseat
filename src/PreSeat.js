import React, { Component } from "react";
const seatMaps = require("./seatMapLayout");
import SegmentTabs from "./SegmentTabs";
import PriceBox from "./PriceBox";
import { DataContext } from "./PreSeatContext";

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
