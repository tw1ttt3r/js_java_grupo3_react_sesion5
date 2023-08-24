import { useEffect, useReducer } from "react";
import ActualizaNombre from "../../reducers/actualizaTitulo";

function Title(props) {

  const [state, dispatch] =  useReducer(ActualizaNombre, "");

  const validar = (texto) => {
    dispatch({ type: "validarTexto", nuevoTitle: texto });
  };

  useEffect(() => {
    console.log("este es el primer console");
    validar(props.title);
    return () => {
      console.log("este componente se limpio");
    } // funcion de limpieza
  }, []); // esta vacia que solo se ejecutará una vez, cuando el componente se monta
  
  useEffect(() => {
    console.log("nuevo dato de props", props);
    validar(props.title);
  }, [props]); // esta vacia que solo se ejecutará una vez, cuando el componente se monta

  return (<h1>{state}</h1>)
}

export default Title