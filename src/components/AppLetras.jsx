import useLetras from "../hooks/useLetras";
import Alerta from "./Alerta";
import Formulario from "./Formulario";

const AppLetras = () => {
  const { alerta } = useLetras();
  return (
    <>
      <header>Búqueda de Lestras de Canciones</header>
      <Formulario />
      <main>
          {alerta && <Alerta>{alerta}</Alerta>} 
      </main>
    </>
  );
};

export default AppLetras;
