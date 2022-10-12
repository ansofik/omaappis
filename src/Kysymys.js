import logo from './logo.svg';
import './App.css';

const Kysymys = (props) => {
    return (
        <form>
            <div class="quest">
                <label class="bold">{props.kysymys.kysymys}</label>
                <div>{props.kysymys.vastausVaiht.map((vastaus, i) =>
                    <div class="ans">
                        <input type="checkbox" id={"a" + i} />
                        <label for={"a" + i}>{vastaus}</label>
                    </div>)}
                </div>
            </div>
        </form>
    );
}

export default Kysymys;