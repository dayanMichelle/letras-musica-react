import { createContext, useState } from "react";
import axios from "axios";
const LetrasContext = createContext();

const LetrasProvider = ({ children }) => {
    const [alerta,setAlerta] = useState('')
    const [letra,setLetra] = useState('')


    const buquedaletra = async (busqueda ) => {
        try {
            const {artista,cancion} = busqueda
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
            const {data} = await axios.get(url)
            setLetra(data.lyrics)
        } catch (error) {
            console.error(error);
        }
    }
   
  return <LetrasContext.Provider 
            value={{
                alerta,
                setAlerta,
                buquedaletra
            }}>
      {children}
    </LetrasContext.Provider>;
};

export { LetrasProvider };
export default LetrasContext;
