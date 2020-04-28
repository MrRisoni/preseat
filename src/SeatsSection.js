import React, { Component } from "react";
import SeatButton from "./SeatButton";

class SeatsSection extends Component {

 checkEmergencyExits(data)
 {
   var seatProps = data.seatProps;
   var seatId = data.seatId;
   var layoutLen = data.layoutLen;
   var hasLeft = 0;
   var hasRight = 0;

   if (seatProps.indexOf("EX") > -1) {
     if (seatId ===0) {
       hasLeft =1;
     }
     if (seatId === layoutLen) {
       hasRight = 1;
     }
   }
   return {hasLeft,hasRight};
 }

  render() {
    let seatsHtml = [];
    let alphabet = 'ABCDEFGH';
    let btnKey = "";
    let layout = this.props.data.layoutStr;
      var pricingKey =  this.props.data.pricingKey;
    let start = this.props.data.start;
    let finish = this.props.data.end;

    var exitClass = '';

    var i =start;
    for (var rowsObj of this.props.data.rows) {
      var  seatsData = rowsObj.seats;
      let colsHtml = [];

      var mapRowId = 0;
      for (let seatId = 0; seatId < layout.length; seatId++) {
        let rowId = 0;
        if (seatId > 0 && layout[seatId] === "A" && layout[seatId + 1] === "A") {
          rowId = i;
        }
        var el = [];
        var tooltip = [];

          mapRowId = rowsObj.rowId;

          if (seatsData[seatId].props.indexOf("LG") > -1) {
            el.push("seatLegRoom");
            tooltip.push('LG');
          }

          if (seatsData[seatId].available === 0) {
            el = []; // top priority not available
            el.push("seatNotAvailable");
          }

          if (seatsData[seatId].props.indexOf("NO") > -1) {
            tooltip = el = []; // top priority not available
            el.push("seatNotExists");
          }

var exits = this.checkEmergencyExits({seatProps:seatsData[seatId].props, layoutLen:layout.length,seatId:seatId});

          if (exits.hasLeft ==1) {
            exitClass = " emergencyExit emergencyLeft";
            tooltip.push('EX');
            colsHtml.push(<div className={exitClass}></div>);
          }

          if (exits.hasRight ==1) {
     tooltip.push('EX');
     }



        btnKey = "stBtn_" + i + layout[seatId].name;


        colsHtml.push(
          <SeatButton
            key={btnKey}
            tooltips={tooltip}
            segId={this.props.segId}
            colName={alphabet[seatId]}
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

      //  if (this.checkEmergencyExit( {seatsData,layoutLen:layout.length, r,x})) {
      //    exitClass = " emergencyExit emergencyRight";

        //  colsHtml.push(<div className={exitClass}></div>);
      //   }

        if (rowId > 0) {
          colsHtml.push(
            <span className="row-number">
              <p>{mapRowId}</p>
            </span>
          );
        }
      }
      seatsHtml.push(<div className="row seatsHorRow">{colsHtml}</div>);
    } // end rows iteration
    return <section className="segmentMap">{seatsHtml}</section>;
  }
}
export default SeatsSection;
