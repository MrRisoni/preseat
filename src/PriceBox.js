import React, { Component } from "react";
import { DataContext } from "./PreSeatContext";

class PriceBox extends Component {
  static contextType = DataContext;

  getPassengerClasName(currentPaxId,activePaxId){
    return (currentPaxId == activePaxId) ? "table-info" : "";
  }

  render() {
    let { segments, passengers ,currentCurrency,activePax} = this.context;

    let segsArr = segments.map((sg, idx) => {
      let key = sg.from.toLowerCase() + "-" + sg.to.toLowerCase();

      return Object.assign(
        {},
        { key, href: "#" + key, tab: "tb" + key, selected: idx == 0 },
        sg
      );
    });

    let segmentsCost = [];
    let overall =0;
    for (var s =0;s<segments.length; s++) {
      let ttl =0;
      for (var p =0;p<passengers.length; p++) {
          ttl+= passengers[p].selection[s].cost;
          overall+= passengers[p].selection[s].cost;

      }
      segmentsCost.push({key:s,total:ttl});
    }
//  this.context.functions
    return (
      <section>
        <table className="table table-bordered">
          <thead>
            <tr>
              <td></td>
              {segsArr.map(sg => (
                <th key={sg.key}>{sg.key}</th>
              ))}
              <td></td>
            </tr>
          </thead>
          <tbody>
            {passengers.map((psg,pxId) => (
              <tr className={ this.getPassengerClasName(pxId,activePax) } key={psg.key}>
                <td>{psg.name}</td>
                {psg.selection.map(choice => (
                  <td>{choice.chosen}</td>
                ))}
                <td><button className="btn btn-sm btn-primary" onClick={() => this.context.functions.setActivePax(psg.key)}>Select</button></td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <td></td>
              {segsArr.map(sg => (
                <th key={sg.key}>{sg.key}</th>
              ))}
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {passengers.map(psg => (
              <tr key={psg.key}>
                <td>{psg.name}</td>
                {psg.selection.map(choice => (
                  <td>{choice.cost} {currentCurrency.code}</td>
                ))}
                <td>{psg.totalCost} {currentCurrency.code}</td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
              {segmentsCost.map(sgc => (
                <td>{sgc.total} {currentCurrency.code}</td>
              ))}
              <td>{overall} {currentCurrency.code}</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default PriceBox;
