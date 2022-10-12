import logo from './logo.svg';
import './App.css';

const Vastaus = (props) => {
    return (
        <div>
        <label for="input"><input type="checkbox" name="input">{props.vastaus}</input></label>
        </div>
    )
}

export default Vastaus;