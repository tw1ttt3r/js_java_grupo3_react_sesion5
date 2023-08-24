import { useContext } from "react";
import GlobalContext from "../../contexts/globals";

function Title() {

  const { title } = useContext(GlobalContext);

  return (<h1>{title}</h1>)
}

export default Title