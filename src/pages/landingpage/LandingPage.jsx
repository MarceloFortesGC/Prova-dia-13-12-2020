import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './LandingPage.css'

import textos from '../../data/textos.json'

const texto = textos.LandingPage[0]

function LandingPage(){
    return(
        <h1>
        <Header />
        <div className="container">
            <div className="text">
                <h1>{texto.txt1}</h1>
                <br />
                <br />
                <h2>{texto.txt2}</h2>
                <br />
                <p>{texto.txt3}</p>
                <br />
                <p>{texto.txt4}</p>
                <p>{texto.txt5}</p>
            </div>
        <table>
            <tr>
                <th>{texto.txt6}</th>
                <th>{texto.txt7}</th>
                <th>{texto.txt8}</th>
            </tr>
            <tr>
                <td>{texto.txt9}</td>
                <td>{texto.txt10}</td>
                <td>{texto.txt11}</td>
            </tr>
            <tr>
                <td>{texto.txt12}</td>
                <td>{texto.txt13}</td>
                <td>{texto.txt14}</td>
            </tr>
        </table>
        </div>
        <Footer />
        </h1>
    );
}

export default LandingPage;