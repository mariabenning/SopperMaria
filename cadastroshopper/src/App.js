import Cadastro from "./Components/Cadastro/Cadastro";
import Home from "./Components/Home/Home";
import  GlobalStyle from "./Components/Home/styled";
import Router from "./Routes/Router";
import { useState, useEffect } from "react";


const App =() => {
const [ produtos, setProdutos ] = useState ([
{ id: 1, produto: "azeite", quantidade:4},
{ id: 2, produto: "bolacha", quantidade:10},
{ id: 3, produto: "pão", quantidade:10},
{ id: 4, produto: "ovo", quantidade:10}
]);

const AddToCa = () => {
  setProdutos()
}





  return (


    <div >
      <GlobalStyle></GlobalStyle>
      <Router/>
       
       
      
    </div>
  );
}
export default App;
