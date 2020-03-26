import React, { Component } from "react";

class SeatButton extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(
      "clicked row" + this.props.actualRow + " col " + this.props.colName
    );
    this.setState({ clicked: true });
  }
  render() {
    let seatProperties = this.props.seatContextClasses.join(" ");
    let clsName = "btn seatBtn btn-sm btn-primary " + seatProperties;

    let rowNumberDiv = <span />;
    if (this.props.rowId > 0) {
      rowNumberDiv = <span className="row-number">{this.props.rowId}</span>;
    }

    if (this.state.clicked) {
      clsName += " seatChosen ";
    }

    return (
      <span>
        <button
          type="button"
          className={clsName}
          data-toggle="tooltip"
          data-placement="top"
          title="Tooltip on top"
          onClick={this.handleClick}
        >
          {this.props.colName}
        </button>
      </span>
    );
  }
}

export default SeatButton;
