import { createContext, useState } from "react";

const LetrasContext = createContext();

const LetrasProvider = ({ children }) => {
    const [alerta,setAlerta]=useState('')
  return <LetrasContext.Provider 
            value={{
                alerta,
                setAlerta
            }}>
      {children}
    </LetrasContext.Provider>;
};

export { LetrasProvider };
export default LetrasContext;
