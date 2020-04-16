import React, { Component } from "react";
import { DataContext } from "./PreSeatContext";


class SeatButton extends Component {
	static contextType = DataContext;

constructor(props)
	{
	super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(
      "clicked row" + this.props.actualRow + " col " + this.props.colName
    );
	  this.context.functions.pickSeat({row:this.props.actualRow,col:this.props.colName,segId:this.props.segId});
  //  thissetState({ clicked: true });

  }
  render() {
    let {  passengers} = this.context;

    let seatProperties = this.props.seatContextClasses.join(" ");
    let clsName = "btn seatBtn btn-sm btn-primary " + seatProperties;

    let rowNumberDiv = <span />;
    if (this.props.rowId > 0) {
      rowNumberDiv = <span className="row-number">{this.props.rowId}</span>;
    }

    var seatId = this.props.actualRow + this.props.colName;

		if (this.props.segId ==0 && this.props.actualRow ==13) {
			console.log(passengers);
		}

    var isChosen = false;
    for (var p =0 ;p < passengers.length; p++) {
        var selSeat = passengers[p].selection[this.props.segId]['chosen'];
				if (this.props.segId ==0 && this.props.actualRow ==13) {

				console.log('selseat is ' + selSeat);
}
        if (selSeat == seatId) {
					console.log('chosen!!!');
          isChosen = true;
          break;
        }
    }

    if (isChosen) {
      clsName += " seatChosen ";
				console.log('Adding CLass!!! ' + seatId);
				console.log(clsName);
    }

    return (
      <span>
        <div
          className={clsName}
          data-toggle="tooltip"
          data-placement="top"
          title="Tooltip on top"
          onClick={this.handleClick}
        >
          {this.props.colName}
        </div>
      </span>
    );
  }
}

export default SeatButton;
