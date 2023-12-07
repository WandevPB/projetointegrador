// Cadastro.js

import React, { useState } from 'react';
import './styles.css'; // Importe o arquivo CSS

const Cadastro = ({ handleCadastro, redirectToLogin }) => {
  const [registrationEmail, setRegistrationEmail] = useState('');
  const [registrationPassword, setRegistrationPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [rgm, setRgm] = useState('');
  const [classroom, setClassroom] = useState('');
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que o RGM contém apenas números
    if (!/^\d+$/.test(rgm)) {
      alert('O RGM deve conter apenas números.');
      return;
    }

    // Verificar se as senhas coincidem
    if (registrationPassword !== repeatPassword) {
      alert('As senhas não coincidem. Por favor, tente novamente.');
      return;
    }

    // Adicionar lógica de cadastro
    handleCadastro({
      email: registrationEmail,
      password: registrationPassword,
      rgm,
      classroom,
      userName,
    });

    // Limpar os campos após o cadastro
    setRegistrationEmail('');
    setRegistrationPassword('');
    setRepeatPassword('');
    setRgm('');
    setClassroom('');
    setUserName('');

    // Redirecionar para o login
    redirectToLogin();
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 offset-md-3 transparent-box cadastro">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">Nome:</label>
            <input
              type="text"
              className="form-control custom-input" // Adicione a classe 'custom-input'
              id="userName"
              placeholder="Digite seu nome"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="registrationEmail">Email:</label>
            <input
              type="email"
              className="form-control custom-input" // Adicione a classe 'custom-input'
              id="registrationEmail"
              placeholder="Digite seu email"
              value={registrationEmail}
              onChange={(e) => setRegistrationEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="registrationPassword">Senha:</label>
            <input
              type="password"
              className="form-control custom-input" // Adicione a classe 'custom-input'
              id="registrationPassword"
              placeholder="Digite sua senha"
              value={registrationPassword}
              onChange={(e) => setRegistrationPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="repeatPassword">Repetir Senha:</label>
            <input
              type="password"
              className="form-control custom-input" // Adicione a classe 'custom-input'
              id="repeatPassword"
              placeholder="Repita sua senha"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rgm">RGM:</label>
            <input
              type="text"
              className="form-control custom-input" // Adicione a classe 'custom-input'
              id="rgm"
              placeholder="Digite seu RGM"
              value={rgm}
              onChange={(e) => setRgm(e.target.value.replace(/\D/, ''))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="classroom">Turma:</label>
            <input
              type="text"
              className="form-control custom-input" // Adicione a classe 'custom-input'
              id="classroom"
              placeholder="Digite sua turma"
              value={classroom}
              onChange={(e) => setClassroom(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">Cadastrar</button>
          <button type="button" className="btn btn-link" onClick={redirectToLogin}>
            Voltar para o Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
