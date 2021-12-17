import { useState, useEffect } from "react"
import { useForm } from 'react-hook-form';
import ListaDeProdutos from "../ListaDeProdutos/ListaDeProdutos";
import Carrinho from "../Carrinho/Carrinho";


import {TituloCadastro, ContainerProdutos } from "./styled";


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
          <ContainerProdutos>
          <ListaDeProdutos></ListaDeProdutos>
          <Carrinho></Carrinho>
          </ContainerProdutos>
      </div>
    );
  }
  
  export default Cadastro;
  