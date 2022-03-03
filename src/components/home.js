import React from "react";
import Logo from "../assets/homeTitle.png"
import '../styles/cards.css'
import { useStateValue } from '../core/StateProvider';
import { actionTypes } from '../core/reducer';

function Home() {
    // eslint-disable-next-line
    const [{ typeData }, dispatch] = useStateValue()
    return (
        <div className="home" >
            <div className="homeTitle"  >
                <img src={Logo} style={{ width: "80%" }} alt="logo Rick y Morty" />
            </div>
            <div className="cardContainer">

                

                    <div  className="card" onClick={() => dispatch({
                        type: actionTypes.TYPE,
                        typeData: "character"
                    })} >
                        <div className="front" >
                            <h3>CHARA<span className="first">C</span>TE<span className="first">R</span>S</h3>
                        </div>
                        <div className="back">
                            <div>
                                <p>Find and compare your favorite characters</p>  
                            </div>
                        </div>
                    </div>
                    <div  className="card" onClick={() => dispatch({
                        type: actionTypes.TYPE,
                        typeData: "location"
                    })} >
                        <div className="front" >
                            <h3>L<span className="first">OC</span>TIO<span className="first">N</span>S</h3>
                        </div>
                        <div className="back">
                            <div>
                                <p>Each one of the locations with all the related information</p>  
                            </div>
                        </div>
                    </div>

                    <div  className="card" onClick={() => dispatch({
                        type: actionTypes.TYPE,
                        typeData: "episode"
                    })} >
                        <div className="front" >
                            <h3>EPI<span className="first">S</span>O<span className="first">D</span>ES</h3>
                        </div>
                        <div className="back">
                            <div>
                                <p>Everything you need to know about each episode and its characters</p>  
                            </div>
                        </div>
                    </div>

                

            </div>
        </div>
    )
}
export default Home