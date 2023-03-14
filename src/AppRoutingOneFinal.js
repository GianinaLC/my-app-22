import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage'
import LoginPage from './pages/auth/LoginPage'
import DashboardPage from './pages/dashboard/Dashboard';

function AppRoutingOneFinal() {
  //TODO: cambiar a valores from seassionStorage
  let loggedIn = true;

  return (
    <Router>
      {/* swtich de rutas */}
      <Routes>
        {/* redirecciones */}
        <Route exact path='/' element=
          {
            loggedIn ? <Navigate replace to='/dashboard' />
              : <Navigate replace to='/login' />
          } />
        {/* login ruta */}
        <Route exact path='/login' element={<LoginPage />} />
        {/* dashboard */}
        <Route exact path='/dashboard' element=
          {
            loggedIn ? <DashboardPage />
              : <Navigate replace to='/login' />
          } />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutingOneFinal;
