import styled from 'styled-components';
import { useState } from 'react';





export const ListaCard = styled.div `
margin: 20px;
border: 1px solid black;
height: 100vh;
width: 50vw;
`

export const CardItens = styled.div `
margin: 2px;
border: 1px solid black;

`




const ListaDeProdutos =() => {


    
      return (
        <div >
          <ListaCard>
          <h2>Lista de produtos</h2>
            <CardItens>            
            <p>Id: 1</p>
            <p>Produto: Oculos</p>
            <p>quantidade: 4</p>
            <p>preço: 10,00</p>
            <button>Comprar</button>
            </CardItens>


            <CardItens>            
            <p>Id: 1</p>
            <p>Produto: Oculos</p>
            <p>quantidade: 4</p>
            <p>preço: 10,00</p>
            <button>Comprar</button>
            </CardItens>

            <CardItens>            
            <p>Id: 1</p>
            <p>Produto: Oculos</p>
            <p>quantidade: 4</p>
            <p>preço: 10,00</p>
            <button>Comprar</button>
            </CardItens>


            <CardItens>            
            <p>Id: 1</p>
            <p>Produto: Oculos</p>
            <p>quantidade: 4</p>
            <p>preço: R$ 10,00</p>
            <button>Comprar</button>
            </CardItens>

            <CardItens>            
            <p>Id: 1</p>
            <p>Produto: Oculos</p>
            <p>quantidade: 4</p>
            <p>preço: R$ 10,00</p>
            <button>Comprar</button>
            </CardItens>

            <CardItens>            
            <p>Id: 1</p>
            <p>Produto: Oculos</p>
            <p>quantidade: 4</p>
            <p>preço: R$ 10,00</p>
            <button>Comprar</button>
            </CardItens>

            


            </ListaCard>
           
        </div>
      );
    }
    
    export default ListaDeProdutos;
    