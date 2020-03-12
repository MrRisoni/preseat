import React, { Component } from 'react';
const  rawTripJson = require('./tripData');


class PreSeat extends Component {
  constructor(props) {
    super(props);


    console.log(rawTripJson);

    this.state = {
      segments: [{from:'ath',to:'fra', key:'ath-fra',href:'#ath-fra',tab: 'tbath_fra',leg:0,sel:true,id:0},
    {from:'fra',to:'lax', key:'fra-lax', href:'#fra-lax',leg:0,tab: 'tbfra_lax',sel:false,id:1}]
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
