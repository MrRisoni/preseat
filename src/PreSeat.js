import React, { Component } from 'react';


class PreSeat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      segments: [{from:'ath',to:'fra', key:'ath-fra',href:'#ath-fra', leg:0},
    {from:'fra',to:'lax', leg:0}]
  };
  }

  render() {
   return (<main>



   <ul class="nav nav-tabs" id="myTab" role="tablist">
   {this.state.segments.map((sgx) => {
     return (   <li class="nav-item">
          <a class="nav-link active" id={sgx.key} data-toggle="tab" href={sgx.href} role="tab" aria-controls={sgx.key} aria-selected="true">{sgx.from}-{sgx.to}</a>
        </li>)
   })}


   </ul>


     <div className="tab-content" id="myTabContent">
     {this.state.segments.map((sgx) => {
        return (<div className="tab-pane fade" id={sgx.key} role="tabpanel" aria-labelledby="profile-tab">.test..</div>);
   })}
     </div>


     </main>)
 }
}


export default PreSeat;
