import logo from './logo.svg';
import './App.css';
import Vastaus from './Vastaus';

const Kysymys = (props) => {
    return (
        <form>
            <div className="quest">
                <label class="bold">{props.kysymys.kysymys}</label>
                <div>{props.kysymys.vastausVaiht.map(vastaus => <Vastaus vastaus={vastaus}/>)}</div>
            </div>
        </form>
    );
}

export default Kysymys;