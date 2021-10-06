import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskList = ['Jogar', 'Estudar', 'Ajudar', 'Fazer projetos', 'Limpar o quarto'];

function App() {
  return (
    taskList.map((task) => Task(task))
  )
}

export default App;
