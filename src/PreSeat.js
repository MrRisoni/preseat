import React, { Component } from "react";
const rawTripJson = require("./data/tripData");
const seatMaps = require("./data/seatMap");
import SegmentTabs from "./SegmentTabs";
import PriceBox from "./PriceBox";

class PreSeat extends Component {
  constructor(props) {
    super(props);

    //  console.log(rawTripJson);
    let segments = [];
    for (var i = 0; i < rawTripJson.segments.length; i++) {
      let sig = rawTripJson.segments[i];
      let key = sig.from.toLowerCase() + "-" + sig.to.toLowerCase();
      let href = "#" + key;
      let tab = "tb" + key;
      let selected = i == 0;
      sig = Object.assign(sig, { key, href, tab, selected });

      segments.push(sig);
    }

    //  console.log(segments);

    this.state = {
      segments: segments,
      passengers: rawTripJson.passengers,
      segmentsCost: rawTripJson.segmentsCost,
      firstSeg: seatMaps[0]
    };
  }

  render() {
    return (
      <main>
        <PriceBox
          segments={this.state.segments}
          passengers={this.state.passengers}
          segmentsCost={this.state.segmentsCost}
        />

        <SegmentTabs
          stmp={this.state.firstSeg}
          segments={this.state.segments}
        />
      </main>
    );
  }
}

export default PreSeat;
