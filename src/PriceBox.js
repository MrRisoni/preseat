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
                  <td></td>
                  {this.props.segments.map((sg) => {
                     return (<th>{sg.key}</th>)
                  })}
                </tr>
            </thead>
            <tbody>
            {this.props.passengers.map((psg) => {
               return (<tr key={psg.key}><td>{psg.name}</td>
                 {psg.selection.map((choice) => {
                    return (<td>{choice.chosen}</td>)
                 })}

                 </tr>)
            })}
            </tbody>
          </table>

     </section>)
 }

}


export default PriceBox;
