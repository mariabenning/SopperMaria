import { useState, useEffect } from "react"
import { useForm } from 'react-hook-form';


import {TituloCadastro, InputCadastro, CamposCadastro, buttonRegistrar, CardGrid, CardProdutos, CardCarrinho } from "./styled";


const Cadastro =() => {


  const [nome, setNome] = useState([])
  const [date, setDate] = useState([])


  const mudaNome = (event) => {
    setNome(event.target.value)
  }

  const mudaDate = (event) => {
    setDate(event.target.value)
  }



const FinalizarRegistro= (event) => {
  event.preventDefault()
  alert("Registro realizado")
}

    return (
      <div >
        
          
          <TituloCadastro>Cadastre-se</TituloCadastro> 
          
          <form onSubmit={FinalizarRegistro}>
            
          Nome:
          <input value={nome} onChange={mudaNome}></input>
          Data de entrega:
          <input  value={date} onChange={mudaDate} type ="date"></input>
          <button>registar</button>
          </form>

          <CardGrid>
          <CardProdutos>
          <h2>Lista de produtos</h2>
          </CardProdutos>
        
          <CardCarrinho>
          <h2>Carrinho</h2>
          </CardCarrinho>

          </CardGrid>
      </div>
    );
  }
  
  export default Cadastro;
  