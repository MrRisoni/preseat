import React, { Component } from "react";
import SeatButton from "./SeatButton";

class SeatsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

 checkEmergencyExit(data)
 {
   var seatsData = data.seatsData;
   var layoutLen = data.layoutLen;
   var rowIndex = data.rowIndex;
   var seatIndex = data.seatIndex;

   if (seatsData[rowIndex] !== undefined && seatsData[rowIndex].seats[seatIndex] !== undefined) {
     if (
       seatIndex === layoutLen - 1 &&
       seatsData[rowIndex].seats[seatIndex].props.indexOf("EX") > -1
     ) {
       console.log('YESS');
       return true;
     }
   }
   return false;
 }

  render() {
    let seatsHtml = [];

    let btnKey = "";
    let layout = this.props.data.layout;
    let start = this.props.data.start;
    let finish = this.props.data.end;
    let seatsData = this.props.data.rows;
    var exitClass = '';
    let r = -1;
    for (let i = start; i <= finish; i++) {
      let colsHtml = [];
      r++;
      var mapRowId = 0;
      for (let x = 0; x < layout.length; x++) {
        let rowId = 0;
        if (x > 0 && layout[x].pos === "A" && layout[x + 1].pos === "A") {
          rowId = i;
        }
        var el = [];
        var tooltip = [];
        if (seatsData[r] !== undefined && seatsData[r].seats[x] !== undefined) {
          mapRowId = seatsData[r].rowId;

          if (seatsData[r].seats[x].props.indexOf("LG") > -1) {
            el.push("seatLegRoom");
            tooltip.push('LG');
          }

          if (seatsData[r].seats[x].available === 0) {
            el = []; // top priority not available
            el.push("seatNotAvailable");
          }

          if (seatsData[r].seats[x].props.indexOf("NO") > -1) {
            tooltip = el = []; // top priority not available
            el.push("seatNotExists");
          }

          if (x === 0 && seatsData[r].seats[x].props.indexOf("EX") > -1) {
            exitClass = " emergencyExit emergencyLeft";
            tooltip.push('EX');
            colsHtml.push(<div className={exitClass}></div>);
          }

        if (this.checkEmergencyExit( {seatsData,layoutLen:layout.length, r,x})) {
         tooltip.push('EX');
         }


        }

        btnKey = "stBtn_" + i + layout[x].name;
        var pricingKey = (seatsData[r].seats[x].pricingKey !== undefined) ? seatsData[r].seats[x].pricingKey  : 'ff';

        colsHtml.push(
          <SeatButton
            key={btnKey}
            tooltips={tooltip}
            segId={this.props.segId}
            colName={layout[x].name}
            seatContextClasses={el}
            pricingKey={pricingKey}
            rowId={rowId}
            actualRow={i}
          />
        );

      /*  if (seatsData[r] !== undefined && seatsData[r].seats[x] !== undefined) {
          if (
            x === layout.length - 1 &&
            seatsData[r].seats[x].props.indexOf("EX") > -1
          ) {
            exitClass = " emergencyExit emergencyRight";

            colsHtml.push(<div className={exitClass}></div>);
          }
        } */

        if (this.checkEmergencyExit( {seatsData,layoutLen:layout.length, r,x})) {
          exitClass = " emergencyExit emergencyRight";

          colsHtml.push(<div className={exitClass}></div>);
         }

        if (rowId > 0) {
          colsHtml.push(
            <span className="row-number">
              <p>{mapRowId}</p>
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
