import { useState } from "react";
import "./global.scss";

export default function App() {
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  };
  
  return(
    <main>
      <h1>"Liberte a magia da programação com a lâmpada de Aladdin."</h1>
      
      <img src={ lampada
            ? 'https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true'
            : 'https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true'} />
      
      <button onClick={trocarLampada}>Clique Aqui</button>
    </main>
  );
}