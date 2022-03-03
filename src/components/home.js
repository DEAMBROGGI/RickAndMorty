import React from "react";
import Logo from "../assets/homeTitle.png"
import '../styles/cards.css'
import { useStateValue } from '../core/StateProvider';
import { actionTypes } from '../core/reducer';

function Home() {
    const type = ["character", "location", "episode"]
    // eslint-disable-next-line
    const [{ typeData }, dispatch] = useStateValue()
    return (
        <div className="home" >
            <div className="homeTitle"  >
                <img src={Logo} style={{ width: "80%" }} alt="logo Rick y Morty" />
            </div>
            <div className="cardContainer">

                {type.map(selection =>

                    <div key={selection} className="card" onClick={() => dispatch({
                        type: actionTypes.TYPE,
                        typeData: selection
                    })} >
                        <div className="front" >
                            <h3>{selection.toLocaleUpperCase()}<span className="first">S</span></h3>
                        </div>
                        <div className="back">
                            <div>
                                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                                <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}
export default Home