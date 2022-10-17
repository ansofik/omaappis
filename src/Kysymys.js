import './App.css';
import Vastaus from './Vastaus';

const Kysymys = (props) => {
    return (
        <form>
            <div className="quest">
                <label className="bold">{props.kysymys.kysymys}</label>
                <div>
                    <label>Muuta kysymystä: </label>
                    <input type="text" id="kysymys" onChange={(event) => {
                        props.dispatch({
                            type: 'KYSYMYS_MUUTTUI',
                            payload: {
                                kysymys: event.target.value,
                                tentinIndex: props.tentinIndex,
                                kysymyksenIndex: props.kysymyksenIndex
                            }
                        })
                    }} value={props.kysymys.kysymys} />
                </div>
                <div>{props.kysymys.vastausVaiht.map((vastaus, index) => <Vastaus vastaus={vastaus} tentinIndex={props.tentinIndex} kysymyksenIndex={props.kysymyksenIndex} vastauksenIndex={index} dispatch={props.dispatch} />)}</div>
            </div>
            <label id="kysymys">Muuta: </label>

        </form>
    );
}

export default Kysymys;