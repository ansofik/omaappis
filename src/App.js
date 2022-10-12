import logo from './logo.svg';
import './App.css';
import Kysymys from './Kysymys';

/* import Luokka from './Luokka';
import Oppilas from './Oppilas'; */


/* const App = () => {

  let oppilas1 = { nimi: "Olli Oppilas" };
  let oppilas2 = { nimi: "Mikko Mallikas" };
  let oppilas3 = { nimi: "Kalle Kolmonen" };

  let luokka1 = {
    nimi: "3A",
    oppilaidenMaara: 27,
    oppilaat: [oppilas1, oppilas3]
  };

  let luokka2 = {
    nimi: "2B",
    oppilaidenMaara: 24,
    oppilaat: [oppilas2]
  };

  let koulu = {
    oppilaidenMaara: 100,
    nimi: "Kangasalan ala-aste",
    luokat: [luokka1, luokka2]
  };

  return (
    <div>
    <div>Koulun nimi: {koulu.nimi}</div>
    <div>Oppilaita koulussa: {koulu.oppilaidenMaara}</div>
    {koulu.luokat.map(luokka => <div><Luokka luokka={luokka}/></div>)}
    </div>
  );
} */

const App = () => {

  let vastaus1 = {
    vastaus: 2
  }

  let vastaus2 = {
    vastaus: 3
  }

  let vastaus3 = {
    vastaus: 5
  }

  let vastaus4 = {
    vastaus: "Kyllä"
  }

  let vastaus5 = {
    vastaus: "Ei"
  }

  let kysymys1 = {
    kysymys: "Paljonko on 1+2?",
    vastausVaiht: [vastaus1,vastaus2,vastaus3],
    oikeaVastaus: 3
  }

  let kysymys2 = {
    kysymys: "Onko kuu juustoa?",
    vastausVaiht: [vastaus4,vastaus5],
    oikeaVastaus: "Ei"
  }

  let tentti1 = {
    nimi: "haskell perusteet",
    kysymykset: [kysymys1, kysymys2]
  }

  let tentti2 = {
    nimi: "javascript perusteet",
    kysymykset: [kysymys1]
  }

  return (
    <div>
      <header>
        <ul id="ylamenu">
          <li><a href="">tentit</a></li>
          <li><a href="">tietoa sovelluksesta</a></li>
          <li><a href="">poistu</a></li>
        </ul>
      </header>
      <div className="center">
        <nav>
          <ul id="tenttimenu">
            <li><a href="" id="eka">{tentti1.nimi}</a></li>
            <li><a href="" id="toka" >{tentti2.nimi}</a></li>
          </ul>
        </nav>
        <div>
          {tentti1.kysymykset.map(kysymys => <div><Kysymys kysymys={kysymys} /></div>)}
        </div>
        <div className="width">
          <a href="" id="nayta">Näytä vastaukset</a>
        </div>
      </div>
    </div>
  )
}

export default App;
