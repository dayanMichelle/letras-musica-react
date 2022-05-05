import { createContext } from "react";

const LetrasContext = createContext();

const LetrasProvider = ({ children }) => {
  return <LetrasContext.Provider 
            value={{}}>
      {children}
    </LetrasContext.Provider>;
};

export { LetrasProvider };
export default LetrasContext;
