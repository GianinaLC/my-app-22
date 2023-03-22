import './App.css';
/* import Father from './components/containers/father';
import TaskListComponent from './components/containers/task_list';
import Greetingstyled from './components/pure/greetingStyles';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import Optionalrender from './components/pure/opcionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import AsyncExample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/ObservableExample'; */
import FetchExample from './components/pure/FetchExample';

function App() {
  return (
    <div className="App">
      {/* componentes de listado de tareas */}
      {/* <TaskListComponent /> */}
      {/*  <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/*  ejemplo4, todo lo que hay aqui, es tratado como prop.children*/}
      {/* <Ejemplo4 nombre='Laura'><h3>Contenido del prop.children</h3></Ejemplo4> */}

      {/* <Greetingstyled name='Giani'></Greetingstyled> */}
      {/* gestion de eventos */}
      {/* <Father></Father> */}

      {/* ejemplos de renderizado condicional */}
      {/* <Optionalrender /> */}

      {/* ejemplo formik yup */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}

      {/* ejemplos asincronos */}
      {/* <AsyncExample /> */}
      {/* <ObservableExample /> */}
      <FetchExample />
    </div>
  );
}

export default App;
