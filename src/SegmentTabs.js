import React, { Component } from "react";
import SeatMap from "./SeatMap";
import { DataContext } from "./PreSeatContext";

class SegmentTabs extends Component {
  static contextType = DataContext;

  render() {
    let { segments } = this.context;

    let segsArr = [];
    for (var i = 0; i < segments.length; i++) {
      let sig = segments[i];
      let key = sig.from.toLowerCase() + "-" + sig.to.toLowerCase();
      let href = "#" + key;
      let tab = "tb" + key;
      let selected = i == 0;
      sig = Object.assign(sig, { key, href, tab, selected });

      segsArr.push(sig);
    }

    return (
      <section>
        <div className="row">
          <div className="col-8 offset-2">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              {segsArr.map(sgx => {
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
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="tab-content" id="myTabContent">
              {segsArr.map(sgx => {
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
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SegmentTabs;
