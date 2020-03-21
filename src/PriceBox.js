import React, { Component } from "react";

class PriceBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <td></td>
              {this.props.segments.map(sg => {
                return <th>{sg.key}</th>;
              })}
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {this.props.passengers.map(psg => {
              return (
                <tr key={psg.key}>
                  <td>{psg.name}</td>
                  {psg.selection.map(choice => {
                    return <td>{choice.chosen}</td>;
                  })}
                  <td>0</td>
                </tr>
              );
            })}
            <tr>
              <td>Total</td>
              {this.props.segmentsCost.map(sgc => {
                return <td>{sgc.total}</td>;
              })}
              <td>Total</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default PriceBox;
