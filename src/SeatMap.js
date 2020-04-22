import React, { Component } from "react";
import SeatsSection from "./SeatsSection";

class SeatMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        {this.props.stmp.sections.map(section => (
          <SeatsSection key={this.props.segId} segId={this.props.segId} data={section} />
        ))}
      </section>
    );
  }
}

export default SeatMap;
