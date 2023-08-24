import { useContext, useReducer, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/title/Title';
import GlobalContext from './contexts/globals';

function App() {

  const texto = useRef();
  const { valida } = useContext(GlobalContext);

  const handlerData = () => {
    if (!!texto.current) {
      valida(texto);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title />
        <div>
          <textarea ref={texto} rows={10} />
          <button onClick={handlerData}>Generar</button>
        </div>
      </header>
    </div>
  );
}

export default App;
