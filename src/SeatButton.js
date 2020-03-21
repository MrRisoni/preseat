import React, { Component } from "react";

class SeatButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let clsName = "btn seatBtn btn-sm btn-primary " + this.props.ailseClass;

    //
    return (
      <section>
        <button type="button" className={clsName}>
          {this.props.colName}
        </button>{" "}
        {/*        <span className="row-number">{this.props.rowId}</span>{" "} */}
      </section>
    );
  }
}

export default SeatButton;
