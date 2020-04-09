import React, { Component } from "react";
import { DataContext } from "./PreSeatContext";

class PriceBox extends Component {
  static contextType = DataContext;

  render() {
    let { segments, passengers, segmentsCost } = this.context;

    let segsArr = segments.map((sg, idx) => {
      let key = sg.from.toLowerCase() + "-" + sg.to.toLowerCase();

      return Object.assign(
        {},
        { key, href: "#" + key, tab: "tb" + key, selected: idx == 0 },
        sg
      );
    });

    console.log(segsArr);

    return (
      <section>
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
                  <td>{choice.chosen}{choice.cost}</td>
                ))}
                <td>{psg.totalCost}</td>
              </tr>
            ))}
            <tr>
              <td>Total</td>
              {segmentsCost.map(sgc => (
                <td>{sgc.total}</td>
              ))}
              <td>Total</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default PriceBox;
