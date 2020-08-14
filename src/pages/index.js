import React from 'react';
import './styles.css';
import Header from '../components/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="title">
          <div className="h1">
            Treinamentos
          </div>
          <div className="sub">
            Nós somos uma plataforma de treinamento da empresa VCI-Brasil.
          </div>
        </div>
        <div className="links">
          <a href="Login">Login</a>
          <a href="Cadastro">Cadastro</a>
        </div>
      </div>
    </div>
  );
}

export default App;
