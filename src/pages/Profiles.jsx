
const ProfileComponente = () => {

  const handleSearch = () => {
  };

  return (
    <main className="main-profile">
      <h1>
        Busca de Perfis no <span>Github.</span>
      </h1>

      <p>Digite no input abaixo o nome do perfil que deseja buscar.</p>

      <div className="input-section">
        <input
          type="text"
          placeholder="Digite o nome do perfil"
        />

        <button onClick={handleSearch}>
          Buscar
        </button>

        {<p>Carregando...</p>}
      </div>

      <div className="counter-section">
        <p>
          Quantidade de perfis pesquisados: <strong></strong>
        </p>
      </div>
    </main>
  );
};

export default ProfileComponente;
