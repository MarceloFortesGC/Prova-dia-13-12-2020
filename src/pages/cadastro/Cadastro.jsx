import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import '../cadastro/Cadastro.css'
import Inputs  from '../../components/List/list';
import Table from '../../components/table/table'

function Cadastro() {
    return(
    <>
    <Header />
    <div className="testfile">
    
    <Table></Table>
       
    <Inputs className="testfile"></Inputs>
    </div>
    </>
    );


}
export default Cadastro;
