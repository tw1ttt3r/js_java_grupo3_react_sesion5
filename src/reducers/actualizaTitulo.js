const palabras = ["queso", "leche", "televisión"];

function ActualizaNombre(state, action) {
  switch(action.type) {
    case "actualizacion":
      return action.nuevoTitle
    case "validarTexto": 
      const stringArray = action.nuevoTitle.split(" ");
      const nuevoString = stringArray.reduce((prev, curr) => {
        if (palabras.includes(curr)) {
          return `${prev} *****`;
        }
        return `${prev} ${curr}`;
      }, "");
      return nuevoString
    default:
  }
}

export default ActualizaNombre;