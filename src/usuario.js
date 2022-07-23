import React from 'react';
import './style.css';

function Usuario({ usuario }) {
  return (
    <>
      <div className="usuario-container">
        <div className="usuario">
          <div className="img-container">
            <img
              className="user-img"
              src={usuario.avatar_url}
              alt="foto de perfil"
            />
          </div>
          <div className="infor-user">
            <h1 className="usuario-name"> {usuario.name}</h1>
            <p className="bio"> {usuario.bio}</p>
            <p>Seguidores: {usuario.followers}</p>
            <p className="repos">Repositórios: {usuario.public_repos}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usuario;
