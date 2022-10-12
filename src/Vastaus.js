import logo from './logo.svg';
import './App.css';

const Vastaus = (props) => {
    return (
        <div className="ans">
            <input type="checkbox"/>
            <label>{props.vastaus.vastaus}</label>
        </div>)
}

export default Vastaus;