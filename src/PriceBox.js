import React, { Component } from 'react';


class PriceBox extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
   return (<section>


          <table className="table table-striped table-bordered">
            <thead>
                <tr>
                  {this.props.segments.map((sg) => {
                     return (<th>{sg.key}</th>)
                  })}
                </tr>
            </thead>
            <tbody>
            </tbody>
          </table>

     </section>)
 }

}


export default PriceBox;
