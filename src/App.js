import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Cadastro from './Cadastro';
import './styles.css';

function App() {
  if (!localStorage.getItem('users')) {
    const exampleUser = {
      email: 'exemplo@email.com',
      password: 'senha123',
      rgm: '123456',
      classroom: 'A101',
      userName: 'Exemplo Usuário',
    };

    localStorage.setItem('users', JSON.stringify([exampleUser]));
  }

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [showCadastro, setShowCadastro] = useState(false);
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');

  const handleLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users'));

    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      setLoggedIn(true);
      setUserData({
        email: user.email,
        rgm: user.rgm,
        classroom: user.classroom,
        userName: user.userName,
      });
    } else {
      alert('Login não foi bem-sucedido. Por favor, cadastre-se.');
    }
  };

  const handleCadastro = ({ email, password, rgm, classroom, userName }) => {
    const users = JSON.parse(localStorage.getItem('users'));

    if (users.some((u) => u.email === email)) {
      alert('Este email já está cadastrado. Por favor, use outro.');
      return;
    }

    const newUser = { email, password, rgm, classroom, userName };
    localStorage.setItem('users', JSON.stringify([...users, newUser]));

    setLoggedIn(true);
    setUserData({ email, rgm, classroom, userName });
    setShowCadastro(false);
  };

  const handleNotasSubmit = (e) => {
    e.preventDefault();

    if (!nota1 || !nota2) {
      alert('Por favor, preencha ambas as notas.');
      return;
    }

    const media = (parseFloat(nota1) + parseFloat(nota2)) / 2;

    if (media > 6) {
      alert(`Parabéns, ${userData.userName}! Sua média foi maior que 6 e você está aprovado.`);
    } else {
      alert(`Infelizmente, ${userData.userName}, sua média foi menor que 6. Tente novamente, acreditamos em você!`);
    }
  };

  const redirectToLogin = () => {
    setShowCadastro(false);
    setLoggedIn(false);
  };

  const redirectToCadastro = () => {
    setShowCadastro(true);
    setLoggedIn(false);
  };

  return (
    <div className="app-container">
      {isLoggedIn ? (
        <div className="transparent-box">
          <div className="line"></div>
          <div className="nota-box">
            <div className="info">
              <h2>Informações</h2>
              <p>Nome: {userData.userName}</p>
              <p>RGM: {userData.rgm}</p>
              <p>Turma: {userData.classroom}</p>
            </div>
            <div className="input">
              <h2>Notas</h2>
              <form onSubmit={handleNotasSubmit}>
                <div className="form-group">
                  <label htmlFor="nota1">Nota 1:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="nota1"
                    placeholder="Digite a nota 1"
                    value={nota1}
                    onChange={(e) => setNota1(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nota2">Nota 2:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="nota2"
                    placeholder="Digite a nota 2"
                    value={nota2}
                    onChange={(e) => setNota2(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar Notas
                </button>
                <button type="button" className="btn btn-secondary" onClick={redirectToLogin}>
                  Voltar para a tela de login
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <>
          {showCadastro ? (
            <Cadastro handleCadastro={handleCadastro} redirectToLogin={redirectToLogin} />
          ) : (
            <Login handleLogin={handleLogin} redirectToCadastro={redirectToCadastro} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
