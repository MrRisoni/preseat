import React, { Component } from "react";
import { DataContext } from "./PreSeatContext";

class LangCurrencySelector extends Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = {
      lang: "",
      cur: ""
    };

    this.changeLang = this.changeLang.bind(this);
    this.changeSettings = this.changeSettings.bind(this);
  }

  changeLang(ev) {
    console.log(ev.target.value);
    this.setState({ lang: ev.target.value });
  }
  changeSettings() {
    this.context.functions.updateChosenLang(this.state.lang);
  }

  render() {
    let {
      languages,
      currentLang,
      currencies,
      currentCurrency,
      translations
    } = this.context;

    return (
      <section id="selectors">
        <div className="row">
          <div className="col-4">
            <select className="form-control" onChange={this.changeLang}>
              {languages.map(lang => (
                <option
                  value={lang.code}
                  selected={lang.code == currentLang}
                  key={lang.code}
                >
                  {lang.title}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4">
            <select className="form-control">
              {currencies.map(cur => (
                <option
                  value={cur.code}
                  selected={cur.code == currentCurrency.code}
                  key={cur.code}
                >
                  {cur.code}
                </option>
              ))}
            </select>
          </div>

          <div className="col-4">
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={this.changeSettings}
            >
              {translations[currentLang].General.Submit}
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default LangCurrencySelector;
