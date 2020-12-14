import React from 'react'
import './list.css'

function msg() {
    alert("Registrado com Sucesso");
  }

function Inputs() {
    return(
    <>
       <form action="/" method="post" id="form_prepare">
        <fieldset>
            <div>
                <label>Nome: <input type="text" name="nome" /></label>
            </div>
            <div>
				<label>Email: <input type="text" name="email" /></label>
            </div>
            <div>
				<label>Telefone: <input type="text" name="telefone" /></label>
            </div>
            <div>
				<label>Data de nasc: <input type="text" name="datadenascimento" /></label>
            </div>
            <div>
            <button onClick={msg}>Registrar-se</button>
            </div>
            <div>
            <text>
                deseja receber nossos newsletter?
            </text>
                <input type="checkbox" name="ok" value="Ok" className="newws" />
    
            </div>
            
    </fieldset>
</form>
    </>
    );
}
export default Inputs;
