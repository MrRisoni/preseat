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

    let btnKey = "";
    let layout = this.props.data.layout;
    let start = this.props.data.start;
    let finish = this.props.data.end;
    let seatsData = this.props.data.rows;

    let r = -1;
    for (let i = start; i < finish; i++) {
      let colsHtml = [];
      r++;
      for (let x = 0; x < layout.length; x++) {
        let rowId = 0;
        if (x > 0 && layout[x].pos == "A" && layout[x + 1].pos == "A") {
          rowId = i;
        }
        var el = [];
        if (seatsData[r] !== undefined && seatsData[r].seats[x] !== undefined) {
          console.log(seatsData[r].seats[x]);

          if (seatsData[r].seats[x].available == 0) {
            el = []; // top priority not available
            el.push("seatNotAvailable");
          }

          if (x == 0 && seatsData[r].seats[x].props.indexOf("EX") > 0) {
            var exitClass = " emergencyExit emergencyLeft";

            colsHtml.push(<div className={exitClass}></div>);
          }
        }

        btnKey = "stBtn_" + i + layout[x].name;
        colsHtml.push(
          <SeatButton
            key={btnKey}
            colName={layout[x].name}
            seatContextClasses={el}
            rowId={rowId}
            actualRow={i}
          />
        );

        if (seatsData[r] !== undefined && seatsData[r].seats[x] !== undefined) {
          if (
            x == layout.length - 1 &&
            seatsData[r].seats[x].props.indexOf("EX") > 0
          ) {
            var exitClass = " emergencyExit emergencyRight";

            colsHtml.push(<div className={exitClass}></div>);
          }
        }
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
    return <section className="segmentMap">{seatsHtml}</section>;
  }
}
export default SeatsSection;
