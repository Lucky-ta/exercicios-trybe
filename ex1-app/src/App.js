import logo from './logo.svg';
import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['varrer a casa', 'Limpar o chão', 'Estudar', 'Fazer os projetos'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    );
  }
}

export default App;
