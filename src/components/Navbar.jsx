import React from 'react';
import stop from '../img/Stop.png';
import pause from '../img/Pause.png';
import run from '../img/Run.png';
import arrow from '../img/Arrow.png';




const Navbar = () => {
    return(
        <div className="nav">
            <div className="nav_wrapper">
                <div className="nav_list">
                    <li>FILES <img src={arrow} alt="arrow"/></li>
                    <li>SAVE</li>
                    <li>OPEN</li>
                </div>
                <div className="nav_buttons">
                    <img src={stop} alt="stop"/>
                    <img src={pause} alt="pause"/>
                    <img src={run} alt="start"/>
                </div>
            </div>

        </div>
    )
}


export default Navbar;