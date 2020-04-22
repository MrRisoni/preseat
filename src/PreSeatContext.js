import React, { Component, createContext } from "react";

import Russian from "./locales/ru.json";
import German from "./locales/de.json";
import French from "./locales/fr.json";
import Swedish from "./locales/sv.json";
import English from "./locales/en.json";

export const DataContext = createContext();

class PreSeatContextProvider extends Component {
  state = {
    pricingInfo: {
      "g1frlzYN9cMJ": 25,
      "4gDQXDj8R1S9": 35,
      "DlRZ1o65RsIw": 10,
      "MAlbfML85mvs": 20,
      "G6xCQRkVfrN6": 15,
      "a9gD3oYqDh1r": 30
    },
    segments: [
      {
        id: 0,
        from: "ATH",
        to: "FRA",
        leg: 0
      },
      {
        id: 1,
        from: "FRA",
        to: "LHR",
        leg: 0
      },
      {
        id: 2,
        from: "LHR",
        to: "LAX",
        leg: 0
      }
    ],
    activePax: 0,
    passengers: [
      {
        id: 0,
        key: "T1",
        ptc: "ADT",
        name: "August Strindberg",
        totalCost: 0,
        selection: [
          {
                key:'T1S1',
            segId: 0,
            chosen: "Heu",
            cost: 0
          },
          {
              key:'T1S2',
            segId: 1,
            chosen: "",
            cost: 30
          },
          {
            key:'T1S3',
            segId: 2,
            chosen: "",
            cost: 10
          }
        ]
      },
      {
        id: 1,
        key: "T2",
        ptc: "ADT",
        name: "Henrik Ibsen",
        totalCost: 20,
        selection: [
          {
            key:'T2S1',
            segId: 0,
            chosen: "",
            cost: 0
          },
          {
            key:'T2S2',
            segId: 1,
            chosen: "",
            cost: 40
          },
          {
            key:'T2S3',
            segId: 2,
            chosen: "",
            cost: 0
          }
        ]
      }
    ],
    lang: "ru",
    languages: [
      {
        code: "ru",
        title: "русский"
      },
      {
        code: "en",
        title: "English"
      },
      {
        code: "fr",
        title: "Français"
      },
      {
        code: "de",
        title: "Deutsch"
      },
      {
        code: "sv",
        title: "Svenska"
      }
    ],
    translations: {
      ru: Russian,
      de: German,
      en: English,
      fr: French,
      sv: Swedish
    },
    currencies: [
      {
        code: "EUR",
        rate: 1.0
      },
      {
        code: "USD",
        rate: 1.14
      },
      {
        code: "CHF",
        rate: 1.13
      },
      {
        code: "RUB",
        rate: 70.09
      },
      {
        code: "SEK",
        rate: 10.94
      }
    ],
    currentLang: 'en',
    currentCurrency: {
      code: "EUR",
      rate: 1.0
    }
  };

  pickSeat = data => {
    let paxes = this.state.passengers;
    let foo = paxes[this.state.activePax].selection[data.segId];
    foo.chosen = data.row + data.col;
    console.log('clicked on ' + this.state.pricingInfo[data.pricingKey]);
    foo.cost = 34;
    this.setState({
      passengers: paxes
    });
  };

  updateChosenLang = newLang => {
    this.setState({
      lang: newLang
    });
  };

  setActivePax = paxId => {
    this.setState({
      activePax: paxId.replace(/^\D+/g, "") - 1
    });
  };
  clearSeats = paxId => {
    var realId = paxId.replace(/^\D+/g, "") - 1;
    console.log(realId);
    let paxes = this.state.passengers;
    for (var s = 0; s < paxes[realId].selection.length; s++) {
      paxes[realId].selection[s].chosen = "";
      paxes[realId].selection[s].cost = 0;
    }
    console.log(paxes);
    this.setState({
      passengers: paxes
    });
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          functions: {
            clearSeats: this.clearSeats,
            pickSeat: this.pickSeat,
            setActivePax: this.setActivePax,
            updateChosenLang: this.updateChosenLang
          }
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default PreSeatContextProvider;
