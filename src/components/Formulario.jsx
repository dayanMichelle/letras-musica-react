import { useState } from "react";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });
  return (
    <form>
      <legend>Busca por Artistas y Canción</legend>
      <div className="form-grid">
        <div>
          <label>Artista</label>
          <input
            value={busqueda.artista}
            onChange={(e) =>
              setBusqueda((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            type="text"
            name="artista"
            placeholder="Nombre del Artista"
          />
        </div>
        <div>
          <label>Canción</label>
          <input
            onChange={(e) =>
              setBusqueda((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={busqueda.cancion}
            type="text"
            name="cancion"
            placeholder="Nombre de la Canción"
          />
        </div>
        <input type="submit" value="Buscar" />
      </div>
    </form>
  );
};

export default Formulario;
