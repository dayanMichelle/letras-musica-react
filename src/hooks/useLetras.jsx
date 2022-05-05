import { useContext } from "react";
import LetrasContext from "../context/LetrasProvider";

const useLetras = () => {
    return(
        useContext(LetrasContext)
    )
}
export default useLetras;