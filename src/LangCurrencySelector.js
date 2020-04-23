import React, { Component } from "react";
import { DataContext } from "./PreSeatContext";

class LangCurrencySelector extends Component {
  static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = {
      lang: "en",
      currency: "EUR"
    };

    this.changeLang = this.changeLang.bind(this);
    this.changeCurrency = this.changeCurrency.bind(this);

    this.changeSettings = this.changeSettings.bind(this);
  }

  changeCurrency(ev) {
    this.setState({ currency: ev.target.value });
  }
  changeLang(ev) {
    console.log(ev.target.value);
    this.setState({ lang: ev.target.value });
  }

  changeSettings() {
    this.context.functions.updateSettings(this.state);
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
            <select defaultValue={currentLang} className="form-control" onChange={this.changeLang}>
              {languages.map(lang => (
                <option
                  value={lang.code}
                  key={lang.code}
                >
                  {lang.title}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4">
            <select defaultValue={currentCurrency.code} className="form-control" onChange={this.changeCurrency}>
              {currencies.map(cur => (
                <option
                  value={cur.code}
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
