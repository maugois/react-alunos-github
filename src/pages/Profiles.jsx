import { useEffect, useRef, useState } from "react";

const ProfileComponente = () => {

  const [input, setInput] = useState('');
  const [profiles, setProfiles] = useState([]);
  const [search , setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const countSearch = useRef(0);

  useEffect(() => {
    if(input.length < 3) {
      return 
    }

    fetch(`https://api.github.com/users/${input}`)
    .then((response) => {
      if(!response.ok) {
        throw Error();
      }
      return response.json()
    })
    .then((data) => {
      setProfiles([data])
      countSearch.current += 1
      setInput('')
    })
    .catch((error) => {
      alert(`Ocorreu um erro ao buscar o perfil: ${input} \n Error: ${error}`);
    })
  }, [search]);

  const handleSearch = () => {
    setSearch()
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
          onChange={(event) => setInput(event.currentTarget.value)}
          value={input}
          disabled={loading}
        />

        <button onClick={handleSearch} disabled={loading}>
          Buscar
        </button>

        {loading && <p>Carregando...</p>}
      </div>

      {profiles.length ? (
        profiles.map((item) => {
          return (
            <div key={item.id} className="user-card">
              <img src={item.avatar_url} alt={item.login} />

              <h2>{item.login}</h2>
            </div>
          )
        })
      ) : (
        <p className="no-results">Nenhum perfil encontrado</p>
      )}

      <div className="counter-section">
        <p>
          Quantidade de perfis pesquisados: <strong>{countSearch.current}</strong>
        </p>
      </div>
    </main>
  );
};

export default ProfileComponente;