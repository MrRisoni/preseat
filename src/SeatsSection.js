import React, { Component } from 'react';
import SeatButton from './SeatButton';


class SeatsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

	render()

	{
    		let sect = this.props.stmp.sections[0];
    	console.log(sect);
    	const layout = [ {pos:'W',name:'A'},{pos:'A',name:'B'},{pos:'A',name:'C'},{pos:'W',name:'D'}];
    	let seatHtml  = [];
    	for (let i =0 ; i < 12; i++) {
    		   let colsHtml = [];
            for (let x=0;x <4 ; x++) {
      		        let el='s';
      		          colsHtml.push(<SeatButton/>);
          }
    		           seatHtml.push(<div className="row">{colsHtml}</div>);

      }


    		return(<section>{seatHtml}</section>);


    }
  }
    	export default SeatsSection;
