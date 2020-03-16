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
    //	const layout = [ {pos:'W',name:'A'},{pos:'A',name:'B'},{pos:'A',name:'C'},{pos:'W',name:'D'}];
    	const layout = [ {pos:'W',name:'A'},
                      {pos:'C',name:'B'},
                      {pos:'A',name:'C'},
                      {pos:'A',name:'D'},
                      {pos:'C',name:'E'},
                      {pos:'C',name:'F'},
                      {pos:'A',name:'G'},
                      {pos:'A',name:'H'},
                      {pos:'C',name:'I'},
                      {pos:'W',name:'J'}]


    	let seatHtml  = [];
    	for (let i =0 ; i < 12; i++) {
    		   let colsHtml = [];
            for (let x=0;x <layout.length ; x++) {
      		        let el='';
                  if (x>0) {
                    if (layout[x].pos == 'A' && layout[x+1].pos == 'A') {
                      el = 'ailse-left';
                    }
                    if (layout[x-1].pos == 'A' && layout[x].pos == 'A') {
                      el = 'ailse-right';
                    }
                  }
    		          colsHtml.push(<SeatButton ailseClass={el}/>);
          }
    		           seatHtml.push(<div className="row">{colsHtml}</div>);

      }


    		return(<section>{seatHtml}</section>);


    }
  }
    	export default SeatsSection;
