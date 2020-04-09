import React, { Component, createContext } from "react";

import Russian from "./locales/ru.json";
import Bokmal from "./locales/no.json";
import German from "./locales/de.json";
import French from "./locales/fr.json";
import Swedish from "./locales/sv.json";
import English from "./locales/en.json";

export const DataContext = createContext();

class PreSeatContextProvider extends Component {
  state = {
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
	  activePax:0,
    passengers: [
      {
        id: 0,
        key: "T1",
        ptc: "ADT",
        name: "August Strindberg",
        totalCost: 0,
        selection: [
          {
            segId: 0,
            chosen: "Heu",
            cost: 0
          },
          {
            segId: 1,
            chosen: "",
            cost: 30
          },
          {
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
            segId: 0,
            chosen: "",
            cost: 0
          },
          {
            segId: 1,
            chosen: "",
            cost: 40
          },
          {
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
        code: "no",
        title: "Bokmål"
      },
      {
        code: "sv",
        title: "Svenska"
      }
    ],
    translations: {
      ru: Russian,
      no: Bokmal,
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
        code: "NOK",
        rate: 10.94
      },
      {
        code: "SEK",
        rate: 10.94
      }
    ],
    currentCurrency: {
      code: "EUR",
      rate: 1.0
    }
  };

	pickSeat = (data) => {
		console.log('pick seat with args');
		console.log(data);
    let paxes = this.state.passengers;
	  let foo = paxes[this.state.activePax].selection[data.segId];
    foo.chosen = data.row + data.col;
    this.setState({
      passengers: paxes
    });
	}

	updateChosenLang = newLang => {
    console.log("new lan is " + newLang);
    this.setState({
      lang: newLang
    });
  };


  setActivePax = paxId => {
    console.log(paxId);
      this.setState({
        activePax: paxId.replace( /^\D+/g, '')-1
      });
  }

  render() {
    return (
      <DataContext.Provider
        value={{
          ...this.state,
          functions: {
		          pickSeat :this.pickSeat,
              setActivePax:this.setActivePax,
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