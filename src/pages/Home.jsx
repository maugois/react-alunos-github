import useSetTitle from "../hooks/useSetTitle";
import { Link } from "react-router-dom";

const HomeComponente = () => {
  useSetTitle("Página inicial");

  return (
    <main className="main-home">
      <h1>Bem vindo Jacaré!</h1>

      <p>
        Essa é um projeto desenvolvido durante o curso da
        <span> Inovation Academy.</span>
      </p>

      <button type="button">
        <Link to={"/profiles"}>Acessar página de Perfis</Link>
      </button>
    </main>
  );
};

export default HomeComponente;
