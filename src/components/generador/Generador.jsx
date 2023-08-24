import { forwardRef, useState } from "react";

const Generador = forwardRef((props, ref) => {

  const [texto, setTexto] = useState("")


  const handlerData = () => {
    setTexto(ref.current.value);
    // ref.current.value = "";
  } 

  return (<div>
    <input ref={ref} />
    <button onClick={handlerData}>Generar</button>
  </div>)
})

export default Generador