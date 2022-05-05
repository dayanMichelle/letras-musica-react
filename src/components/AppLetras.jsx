import useLetras from "../hooks/useLetras";
import Alerta from "./Alerta";
import Formulario from "./Formulario";
import Letra from "./Letra";
import Spinner from "./Spinner";

const AppLetras = () => {
  const { alerta,letra,cargando } = useLetras();
  return (
    <>
      <header>Búqueda de Lestras de Canciones</header>
      <Formulario />
      <main>
        {alerta ? <Alerta>{alerta}</Alerta> : 
        letra ? <Letra /> : 
        cargando ? <Spinner /> :
          <p className="text-center">Busca letras de tus artistas favoritos</p>
        }
        
      </main>
    </>
  );
};

export default AppLetras;
