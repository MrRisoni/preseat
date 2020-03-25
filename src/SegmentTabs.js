import React, { Component } from "react";
import SeatMap from "./SeatMap";

class SegmentTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          {" "}
          {this.props.segments.map(sgx => {
            let clsName = sgx.id > 0 ? " nav-link " : "nav-link active";

            return (
              <li className="nav-item">
                <a
                  className={clsName}
                  id={`string${sgx.key}`}
                  data-toggle="tab"
                  href={sgx.href}
                  role="tab"
                  aria-controls={sgx.key}
                  aria-selected={sgx.sel}
                >
                  {sgx.from}-{sgx.to}{" "}
                </a>{" "}
              </li>
            );
          })}
        </ul>

        <div className="tab-content" id="myTabContent">
          {" "}
          {this.props.segments.map(sgx => {
            let clsName =
              sgx.id > 0 ? " tab-pane fade " : "tab-pane fade show active";
            return (
              <div
                className={clsName}
                id={sgx.key}
                role="tabpanel"
                aria-labelledby={sgx.tab}
              >
                <SeatMap key={sgx.key} stmp={this.props.stmp[sgx.id]} />
              </div>
            );
          })}{" "}
        </div>
      </section>
    );
  }
}

export default SegmentTabs;
