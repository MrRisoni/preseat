import React, { Component} from 'react';
import SeatButton from './SeatButton';

// https://www.seatguru.com/airlines/Lufthansa/Lufthansa_Airbus_A330-300_B.php

class SeatsSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }


    render(){

        let seatsHtml = [];

//	console.log(this.props.stmp.sections[s]);
//	const layout = [ {pos:'W',name:'A'},{pos:'A',name:'B'},{pos:'A',name:'C'},{pos:'W',name:'D'}];
/*	const layout = [ {pos:'W',name:'A'},
                  {pos:'C',name:'B'},
                  {pos:'A',name:'C'},
                  {pos:'A',name:'D'},
                  {pos:'C',name:'E'},
                  {pos:'C',name:'F'},
                  {pos:'A',name:'G'},
                  {pos:'A',name:'H'},
                  {pos:'C',name:'I'},
                  {pos:'W',name:'J'}]
                  */
    let layout = this.props.data.layout;
    let start = this.props.data.start;
    let finish = this.props.data.end;
    console.log(start + ' ' + finish);

    for (let i = start; i < finish; i++) {
      let colsHtml = [];
     for (let x = 0; x < layout.length; x++) {
          let el = '';
          if (x > 0) {
              if (layout[x].pos == 'A' && layout[x + 1].pos == 'A') {
                  el = 'ailse-left';
              }
              if (layout[x - 1].pos == 'A' && layout[x].pos == 'A') {
                  el = 'ailse-right';
              }

              if (layout[x - 1].pos == 'C' && layout[x].pos == 'W') {
                  el = 'ailse-right-big';
              }

          }

          if (x < layout.length - 1) {
              if (layout[x].pos == 'W' && layout[x + 1].pos == 'C') {
                  el = 'ailse-left-big';
              }
          }

        //  colsHtml.push( <SeatButton ailseClass = {el} rowId = { i} />);
      }

  //    seatsHtml.push( < div className = "row" > {colsHtml} < /div>);


  }


        return (<p>sdsd</p>);
      }


}
export default SeatsSection;
