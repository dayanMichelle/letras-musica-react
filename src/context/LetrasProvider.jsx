import { createContext, useState } from "react";
import axios from "axios";
const LetrasContext = createContext();

const LetrasProvider = ({ children }) => {
    const [alerta,setAlerta] = useState('')
    const [cargando,setCargando] = useState(false)
    const [letra,setLetra] = useState('')


    const busquedaletra = async ( busqueda ) => {
        setCargando(true)
        try {
            const {artista,cancion} = busqueda
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
            const {data} = await axios.get(url)
            setLetra(data.lyrics)
            console.log(data.lyrics)
        } catch (error) {
            setAlerta('Canción no encontrada')
        }
        setCargando(false)
    }
   
  return <LetrasContext.Provider 
            value={{
                alerta,
                setAlerta,
                busquedaletra,
                letra,
                cargando
            }}>
      {children}
    </LetrasContext.Provider>;
};

export { LetrasProvider };
export default LetrasContext;
