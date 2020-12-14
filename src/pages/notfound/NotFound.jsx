import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import image from '../../Assets/img/404/404.jpg'

function NotFound(){
    return(
        <>
        <Header />
        <img src={image}></img>
        <Footer />
        </>
    );
}

export default NotFound;