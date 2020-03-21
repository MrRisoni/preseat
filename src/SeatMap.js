import React, { Component } from "react";
import SeatsSection from "./SeatsSection";

class SeatMap extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section>
        {this.props.stmp.sections.map(section => {
          return <SeatsSection data={section} />;
        })}
      </section>
    );
  }
}

export default SeatMap;
