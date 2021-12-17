import styled from 'styled-components'



export const ListCarrinho = styled.div `

display:flex;
flex-direction: column;
margin: 20px;
border: 1px solid black;
height: 50vh;
width: 50vw;
`


export const ItensCarrinho = styled.div `
margin: 2px;
border: 1px solid black;
display: flex;
flex-direction: column;
align-items: center;
`


const Carrinho =() => {

    return (
      <div >

          
        <ListCarrinho>
          
          <h2>Carrinho</h2>
           <ItensCarrinho>
          <p> Produto:1 </p>
          <button> remover</button>
          </ItensCarrinho>

          <ItensCarrinho>
          <p> Produto:1 </p>
          <p> quantidade:1 </p>
          <button> remover</button>
          </ItensCarrinho>

          <ItensCarrinho>
          <p> Produto:1 </p>
          <p> quantidade:1 </p>
          <button> remover</button>
          </ItensCarrinho>

          <ItensCarrinho>
          <p> Produto:1 </p>
          <p> quantidade:1 </p>
          <button> remover</button>
          </ItensCarrinho>

          <ItensCarrinho>
          <p> Produto:1 </p>
          <p> quantidade:1 </p>
          <button> remover</button>
          </ItensCarrinho>

          <ItensCarrinho>
          <p> Produto:1 </p>
          <p> quantidade:1 </p>
          <button> remover</button>
          </ItensCarrinho>

          <ItensCarrinho>
          <p> Produto:1 </p>
          <p> quantidade:1 </p>
          <button> remover</button>
          </ItensCarrinho>

          <p>valor total: rs 100,00</p>
         <button>Finalizar Pedido</button>
          
          </ListCarrinho>

         
      </div>
    );
  }
  
  export default Carrinho;
  