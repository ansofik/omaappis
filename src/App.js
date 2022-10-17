import './App.css';
import Header from './Header';
import Tentti from './Tentti';
import { useState, useReducer } from 'react';

let kysymys1 = {
  kysymys: "Paljonko on 1+2?",
  vastausVaiht: [1, 3, 4],
  oikeaIndex: 1
};

let kysymys2 = {
  kysymys: "Onko kuu juustoa?",
  vastausVaiht: ["kyllä", "ei"],
  oikeaIndex: 1
};

let tentti1 = {
  nimi: "haskell perusteet",
  kysymykset: [kysymys1, kysymys2]
};

let tentti2 = {
  nimi: "javascript perusteet",
  kysymykset: [kysymys1]
};

const tenttiLista = [tentti1, tentti2];

function reducer(state, action) {
  let tentitKopio = [...state ];
  switch (action.type) {
    case 'TENTIN_NIMI_MUUTTUI':
      tentitKopio[action.payload.tentinIndex].nimi = action.payload.nimi;
      return tentitKopio;

    case 'KYSYMYS_MUUTTUI':
      tentitKopio[action.payload.tentinIndex].kysymykset[action.payload.kysymyksenIndex].kysymys = action.payload.kysymys;
      return tentitKopio;

    case 'VASTAUS_MUUTTUI':
      tentitKopio[action.payload.tentinIndex].kysymykset[action.payload.kysymyksenIndex].vastausVaiht[action.payload.vastauksenIndex] = action.payload.vastaus;
      return tentitKopio;

    default:
      throw new Error();
  }
}

const App = () => {
  
  const [tentit, dispatch] = useReducer(reducer, tenttiLista);

  return (
    <div>
      <Header />
      <div className="center">
        <nav>
          <ul className="testmenu">
            {tentit.map(tentti => <li><a href="">{tentti.nimi}</a></li>)}
          </ul>
        </nav>
        <Tentti tentti={tentit[0]} tentinIndex='0' dispatch={dispatch} />
        <div className="width">
          <a href="" id="nayta">Näytä vastaukset</a>
        </div>
      </div>
    </div>
  );
}

export default App;
