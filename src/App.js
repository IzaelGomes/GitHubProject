import React from 'react';
import Usuario from './usuario';
import './style.css';

function App() {
  const [usuario, setUsuario] = React.useState(null);
  //const [error, setError] = React.useState(false);
  const [search, setSearch] = React.useState('');

  async function getGitProfile() {
    if (search === '') {
      alert('Campo vazio!, Insisa um usuário GITHUB');

      setSearch('');
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${search}`);
      const data = await response.json();

      setUsuario(data);
    } catch {
      alert('erro na busca');
    }

    setSearch('');
  }

  return (
    <div className="App">
      {' '}
      {!usuario && <h1>Visualize seu perfil do gitHub logo abaixo</h1>}
      {usuario && <Usuario usuario={usuario} />}
      <input
        className="searchInput"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite o seu usuário do GitHub"
      />{' '}
      <button onClick={getGitProfile}> Search Profile</button>
    </div>
  );
}

export default App;
