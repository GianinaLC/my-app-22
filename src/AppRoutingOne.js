//alojamos nuestras rutas
//switch es un conjunto de rutas
//switch es reemplazado por Routes en v6
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import Homepage from './pages/home/HomePage';
import Notfoundpage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import Taskpage from './tasks/TasksPage';
import TaskDetailPage from './tasks/TasksDetailPage';
import Loginpage from './pages/auth/LoginPage';
import { useEffect } from 'react';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {
  let logged = false;

  let taskList = [
    { id: 1, name: 'task1', description: 'primer tarea' },
    { id: 2, name: 'task2', description: 'segunda tarea' },
  ]


  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('user logged', logged)
  }, [])


  return (
    <div className="App">
      {/* BrowserRouter llamado como Router */}
      <Router>
        <div>
          <aside>
            <Link to='/'> HOME </Link>
            <Link to='/about'> ABOUT </Link>
            <Link to='/task/1'> task1 </Link>
            <Link to='/task/2'> task2 </Link>
            {/* <Link to='/faqs'> FAQS </Link> */}
            <Link to='/login'>Login</Link>
            <Link to='/x404'> 404</Link>
          </aside>

          <main>
            <Routes>
              <Route exact path='/' element={< Homepage />} />
              <Route path='/online-state' element={<StatePage />} />
              <Route exact path='/login' element={
                logged ? (
                  <Navigate replace to="/" />
                  //**v5 Redirect ,v6 Navigate
                ) : (
                  <Loginpage />
                )} />
              {/* TODO: NO ME ANDA EL PATH COMBINADO */}
              {/* <Route path='/(about|faqs)' element={< AboutPage />} /> */}
              <Route path='/about' element={< AboutPage />} />
              <Route path='/profile' element={
                logged ? (
                  <ProfilePage />
                ) : (
                  <Navigate replace to="/login" />
                )
              } />
              <Route path='/tasks' element={<Taskpage />} />
              {/* <Route
                exact
                path='/task/:id'
                render={
                  ({ match }) => (<TaskDetailPage task={taskList[match.params.id - 1]} />)
                }
              >

              </Route> */}
              <Route path='/task/:id' element={<TaskDetailPage task={taskList} />} />
              {/* no se usa mas switch ni component */}
              {/* <Route exact path='/' component={Homepage} /> */}
              {/* dejar siempre al final el 404, cuando no encuentra la ruta sigue con la sgte y si no encuentra ninguna sera un 404 */}
              <Route path='*' element={<Notfoundpage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default AppRoutingOne;
