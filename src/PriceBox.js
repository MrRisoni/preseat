import React, { Component } from "react";
import { DataContext } from "./PreSeatContext";

class PriceBox extends Component {
  static contextType = DataContext;

  render() {
    console.log("pricebox compoe");
    console.log(this.context);
    let { segments, passengers, segmentsCost } = this.context;

    // oject assign and map???
    let segsArr = [];
    for (var i = 0; i < segments.length; i++) {
      let sig = segments[i];
      let key = sig.from.toLowerCase() + "-" + sig.to.toLowerCase();
      let href = "#" + key;
      let tab = "tb" + key;
      let selected = i == 0;
      sig = Object.assign(sig, { key, href, tab, selected });

      segsArr.push(sig);
    }

    return (
      <section>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <td></td>
              {segsArr.map(sg => (
                <th>{sg.key}</th>
              ))}
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {passengers.map(psg => (
              <tr key={psg.key}>
                <td>{psg.name}</td>
                {psg.selection.map(choice => (
                  <td>{choice.chosen}</td>
                ))}
                <td>0</td>
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
