import  { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle `
   *{ margin:0;
    padding:0;
   };
 `
 export default GlobalStyle;






 export const Header = styled.div`
 margin: 5px;
 display: flex;
 justify-content: space-between;
 background: white;
 height: 60px;
 
 
 `
export const ImgLogo = styled.img `
//width: 120px; 
height: 60px; 
margin-left: 50px;
` 


export const ImgBackgroud = styled.img `
width: 100vw; 
height: 100vh;

` 


export const ButtonCadastro = styled.button `
margin-right: 50px;
border: none;
background-color: #2da77a;
border-radius: 10px;
color: white !important;
width: 169px !important;
justify-content: center !important;
cursor: pointer;
`