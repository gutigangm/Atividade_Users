import React, { useState, useEffect } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

const Name = styled.h2`
  margin-top: 10px;
  font-size: 1.5rem;
`;

const Bio = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #777;
`;

function PerfilCardStyled() {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/{nome_usuario}") // Coloque o nome do usuário aqui
      .then((res) => res.json())
      .then((data) => setPerfil(data));
  }, []);

  return (
    perfil && (
      <CardContainer>
        <Avatar src={perfil.avatar_url} alt="Avatar" />
        <Name>{perfil.name}</Name>
        <Bio>{perfil.bio}</Bio>
      </CardContainer>
    )
  );
}

export default PerfilCardStyled;
