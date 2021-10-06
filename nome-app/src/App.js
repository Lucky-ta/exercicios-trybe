import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = ['Estudar', 'Trabalhar', 'Jogar', 'Limpar o quarto'];

const App = () => {
  return ( 
    taskList.map((tarefa) => Task(tarefa))
     );
}

export default App;
