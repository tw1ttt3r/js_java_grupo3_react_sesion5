import { useReducer, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/title/Title';
import ActualizaInputData from './reducers/actualizaInputData'

function App() {

  const texto = useRef();

  const [state, dispatch] = useReducer(ActualizaInputData, "");

  const handlerData = () => {
    if (texto.current !== undefined) {
      dispatch({ type: "actualiza", newTitle: texto.current.value })
      texto.current.value = "";
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title={state} />
        <div>
          <textarea ref={texto} rows={10} />
          <button onClick={handlerData}>Generar</button>
        </div>
      </header>
    </div>
  );
}

export default App;
