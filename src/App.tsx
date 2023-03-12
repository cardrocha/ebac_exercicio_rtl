import PostImagem from "./components/Post";
import EstiloGlobal from "./styles";

// import styles from './App.module.css';

import { AppStyle } from "./AppStyles";

function App() {
  return (
    <AppStyle>
      <EstiloGlobal></EstiloGlobal>
      <PostImagem imageUrl="https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg">
        Olha só que legal minha miniatura do Batmóvel.
      </PostImagem>
    </AppStyle>
  );
}

export default App;
