import React, { Component } from "react";
const seatMaps = require("./seatMap");
import SegmentTabs from "./SegmentTabs";
import PriceBox from "./PriceBox";

class PreSeat extends Component {
  constructor(props) {
    super(props);

    console.log('preseat compo');
    console.log(this.props);

let rawTripJson = {};
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
      segmentsCost: rawTripJson.segmentsCost
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

        <SegmentTabs stmp={seatMaps} segments={this.state.segments} />
      </main>
    );
  }
}

export default PreSeat;
