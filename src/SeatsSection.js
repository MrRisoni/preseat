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
    let el = {};
    let btnKey = "";
    let layout = this.props.data.layout;
    let start = this.props.data.start;
    let finish = this.props.data.end;

    for (let i = start; i < finish; i++) {
      let colsHtml = [];
      for (let x = 0; x < layout.length; x++) {
        let rowId = 0;
        if (x > 0 && layout[x].pos == "A" && layout[x + 1].pos == "A") {
          rowId = i;
        }

        btnKey = "stBtn_" + i + +layout[x].name;
        colsHtml.push(
          <SeatButton
            key={btnKey}
            colName={layout[x].name}
            ailseClass={el}
            rowId={rowId}
          />
        );

        if (rowId > 0) {
          colsHtml.push(
            <span className="row-number">
              <p>{rowId}</p>
            </span>
          );
        }
      }
      seatsHtml.push(<div className="row seatsHorRow">{colsHtml}</div>);
    }
    return <p>{seatsHtml}</p>;
  }
}
export default SeatsSection;
