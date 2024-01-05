import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import Greetingf from './components/pure/greetingf';
import TaskListComponent from './components/container/task_list';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{/* Componente propio greeting.jsx*/}
				{/* <Greeting name="Juan Ginés"></Greeting> */}
				{/* Componente de ejemplo funcional */}
				{/* <Greetingf name="Juan Ginés"></Greetingf> */}
				{/* Componente listado de tareas */}
				<TaskListComponent></TaskListComponent>
			</header>
		</div>
	);
}

export default App;

