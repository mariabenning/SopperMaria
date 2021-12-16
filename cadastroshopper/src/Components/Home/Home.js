import { Header, ImgLogo, ImgBackgroud, ButtonCadastro} from "./styled";
import Cadastro from "../Cadastro/Cadastro";
import logo from "../../Assents/img/logo.jpg"
import backgroud from "../../Assents/img/backgroud.jpg"
import { useHistory } from 'react-router-dom';
import { goToCadastro } from "../../Routes/Router";





const Home =() => {

    const history = useHistory()

    return (
      <div >
        <Header>
        <ImgLogo src={logo}></ImgLogo>
        <ButtonCadastro onClick={() => goToCadastro(history)}>Cadastre-se</ButtonCadastro>
        </Header>
         
        <ImgBackgroud src={backgroud}></ImgBackgroud>

      </div>
    );
  }
  
  export default Home;