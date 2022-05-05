import useLetras from "../hooks/useLetras"
import Spinner from "./Spinner"


const Letra = () => {
    const {letra,cargando} = useLetras()
  return (
   cargando ? <Spinner /> : <div className="letra">{letra}</div>
  )
}

export default Letra