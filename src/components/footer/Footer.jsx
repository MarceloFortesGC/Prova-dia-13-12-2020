import React from 'react'
import './Footer.css'
import Facebook from '../../Assets/img/social-media/facebook.svg'
import Instagram from '../../Assets/img/social-media/instagram.svg'
import Youtube from '../../Assets/img/social-media/youtube.svg'

function Footer(){
    return(
    <>
    <div className="footer">
        <aside>
            <h2>Redes Sociais</h2>
            <div className="social-media-icons">
                <a href="#"><img src={Facebook}></img></a>
                <a href="#"><img src={Instagram}></img></a>
                <a href="#"><img src={Youtube}></img></a>
            </div>
        </aside>
    </div>
    </>
    );
}

export default Footer;