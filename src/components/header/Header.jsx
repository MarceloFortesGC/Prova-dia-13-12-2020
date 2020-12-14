import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

import Logo from '../../Assets/img/logo/logo.png'

function Header(){
    return(
        <>
        <div className="header">
            <div className="logo">
                <Link to='/'><img src={Logo}></img></Link>
            </div>
            <div className="links">
                <Link to="/">Início</Link>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="#">Item 3</Link>
                <Link to="#">Item 4</Link>
            </div>
        </div>
        </>
    );
}

export default Header;