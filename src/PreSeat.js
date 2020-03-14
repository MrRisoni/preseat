import React, { Component } from 'react';
const  rawTripJson = require('./data/tripData');


class PreSeat extends Component {
  constructor(props) {
    super(props);


  //  console.log(rawTripJson);
    let segments  = [];
    for (var i =0; i < rawTripJson.segments.length ; i++) {

      let sig = rawTripJson.segments[i];
      let key = sig.from.toLowerCase() + '-' + sig.to.toLowerCase();
      let href = '#' + key;
      let tab = 'tb' +key;
      let selected = (i==0);
      sig =   Object.assign(sig, {key,href,tab, selected});

      segments.push(sig);
    }

  console.log(segments);

    this.state = {
      segments: segments
    };
  }

  render() {
   return (<main>



   <ul className="nav nav-tabs" id="myTab" role="tablist">
   {this.state.segments.map((sgx) => {
     let clsName  = (sgx.id >0) ? " nav-link " : "nav-link active";


     return (   <li className="nav-item">
          <a className={clsName} id={ `string${sgx.key}` } data-toggle="tab" href={sgx.href} role="tab" aria-controls={sgx.key} aria-selected={sgx.sel}>{sgx.from}-{sgx.to}</a>
        </li>)
   })}


   </ul>


     <div className="tab-content" id="myTabContent">
     {this.state.segments.map((sgx) => {
          let clsName  = (sgx.id >0) ? " tab-pane fade " : "tab-pane fade show active";
        return (<div className={clsName} id={sgx.key} role="tabpanel" aria-labelledby={sgx.tab}>{sgx.key}</div>);
   })}
     </div>


     </main>)
 }
}


export default PreSeat;
