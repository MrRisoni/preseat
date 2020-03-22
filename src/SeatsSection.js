import React, { Component } from "react";
import SeatButton from "./SeatButton";

// https://www.seatguru.com/airlines/Lufthansa/Lufthansa_Airbus_A330-300_B.php

class SeatsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let seatsHtml = [];

    let layout = this.props.data.layout;
    let start = this.props.data.start;
    let finish = this.props.data.end;
    console.log("layut len " + layout.length);
    for (let i = start; i < finish; i++) {
      let colsHtml = [];
      for (let x = 0; x < layout.length; x++) {
        let el = "";
        let rowId = 0;
        if (x > 0) {
          if (layout[x].pos == "A" && layout[x + 1].pos == "A") {
            el = "ailse-left";
            rowId = i;
          }
          if (layout[x - 1].pos == "A" && layout[x].pos == "A") {
            el = "ailse-right";
          }

          if (layout[x - 1].pos == "C" && layout[x].pos == "W") {
            // el = "ailse-right-big";
          }
        }

        if (x < layout.length - 1) {
          if (layout[x].pos == "w" && layout[x + 1].pos == "c") {
            //  el = "ailse-left-big";
          }
        }

        colsHtml.push(
          <SeatButton colName={layout[x].name} ailseClass={el} rowId={rowId} />
        );

        if (rowId > 0) {
          colsHtml.push(
            <span className="row-number">
              <p>{rowId}</p>
            </span>
          );
        }

        seatsHtml.push(<div className="row seatsHorRow">{colsHtml}</div>);
      }
    }
    return <p>{seatsHtml}</p>;
  }
}
export default SeatsSection;
