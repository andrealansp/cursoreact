import React from 'react';

import './index.css';
import logoStarWars from '../../assets/img/logoStarWars.png';

export default function Header(props){
    return(
        <header>
            <img src={logoStarWars}/>
            <h1>Star Wars to Dev</h1>
        </header>
    )
}