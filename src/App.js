import React from 'react';
import Usuario from './usuario';
import './style.css';

function App() {
  const [usuario, setUsuario] = React.useState(false);

  async function getGitProfile() {
    const req = await fetch('https://api.github.com/users/IzaelGomes');
    const github = await req.json();
    setUsuario(github);
  }

  return (
    <div className="App">
      {' '}
      {!usuario && <h1>Visualize seu perfil do gitHub logo abaixo</h1>}
      {usuario && <Usuario usuario={usuario} />}
      <button onClick={getGitProfile}> Search Profile</button>
    </div>
  );
}

export default App;
