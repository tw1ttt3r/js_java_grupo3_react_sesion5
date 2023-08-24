import { createContext, useReducer } from "react";
import ActualizaNombre from '../reducers/actualizaTitulo';


const GlobalContext = createContext({
  title: '',
  valida: () => {}
});

export function GlobalContextProvider(props) {

  const [state, dispatch] = useReducer(ActualizaNombre, "Esto es un titulo default");

  const updateTitle = (texto) => {
    dispatch({ type: "validarTexto", nuevoTitle: texto.current.value });
    texto.current.value = "";
  }

  return (<GlobalContext.Provider
      value={{
        title: state,
        valida: updateTitle
      }}>
    { props.children }
  </GlobalContext.Provider>)
}

export default GlobalContext;