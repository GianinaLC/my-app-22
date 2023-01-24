import './App.css';
import TaskListComponent from './components/containers/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hola mundo 2023</h2>
        {/* componentes de listado de tareas */}
        {/* <TaskListComponent /> */}
        {/*  <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/*  ejemplo4, todo lo que hay aqui, es tratado como prop.children*/}
        <Ejemplo4 nombre='Laura'><h3>Contenido del prop.children</h3></Ejemplo4>
      </header>
    </div>
  );
}

export default App;
