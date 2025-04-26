import React, { useState, useEffect } from "react";

function PerfilCardTailwind() {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/{nome_usuario}") // Coloque o nome do usuário aqui
      .then((res) => res.json())
      .then((data) => setPerfil(data));
  }, []);

  return (
    perfil && (
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white text-center">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={perfil.avatar_url}
          alt="Avatar"
        />
        <h2 className="text-xl font-semibold mt-4">{perfil.name}</h2>
        <p className="text-gray-600 mt-2">{perfil.bio}</p>
      </div>
    )
  );
}

export default PerfilCardTailwind;
