import React, { useState } from 'react';

const Login = ({ handleLogin, redirectToCadastro }) => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginEmail, loginPassword);
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 offset-md-3 transparent-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="loginEmail"></label>
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              placeholder="Digite seu email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="loginPassword"></label>
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              placeholder="Digite sua senha"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Entrar
          </button>
          <button type="button" className="btn btn-link" onClick={redirectToCadastro}>
            Não tem uma conta? Cadastre-se
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
