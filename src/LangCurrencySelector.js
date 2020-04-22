import React, { Component } from "react";
import { DataContext } from "./PreSeatContext";

class LangCurrencySelector extends Component {
  static contextType = DataContext;

  render() {

    let {languages, currentLang,currencies ,currentCurrency} = this.context;

    return (
      <section id="selectors">
          <div className="row">
              <div className="col-6">
              <select className="form-control">
                 {languages.map(lang => (
                      <option selected={lang.code==currentLang} key={lang.code}>{lang.title}</option>

                   ))}

</select>
              </div>
              <div className="col-6">
              <select className="form-control">
              {currencies.map(cur => (
                   <option selected={cur.code==currentCurrency.code} key={cur.code}>{cur.code}</option>

                ))}
</select>
              </div>
          </div>
      </section>
    );
  }
}

export default LangCurrencySelector;
