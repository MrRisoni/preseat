import React, { Component } from 'react';


class SeatButton extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render()
  {
    let clsName  = "btn btn-primary setBtn " + this.props.ailseClass;

    return(<button type="button" className={clsName}>C</button>
  )
    }
  }


  export default SeatButton;
