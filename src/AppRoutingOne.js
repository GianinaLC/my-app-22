//alojamos nuestras rutas
//switch es un conjunto de rutas
//switch es reemplazado por Routes en v6
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Homepage from './pages/home/HomePage';
import Notfoundpage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import Taskpage from './tasks/TasksPage';
import TaskDetailPage from './tasks/TasksDetailPage';

function AppRoutingOne() {
  return (
    <div className="App">
      {/* BrowserRouter llamado como Router */}
      <Router>
        <div>
          <aside>
            <Link to='/'> HOME </Link>
            <Link to='/about'> ABOUT </Link>
            {/* <Link to='/faqs'> FAQS </Link> */}
            <Link to='/x404'> 404</Link>
          </aside>

          <main>
            <Routes>
              <Route exact path='/' element={< Homepage />} />
              {/* TODO: NO ME ANDA EL PATH COMBINADO */}
              {/* <Route path='/(about|faqs)' element={< AboutPage />} /> */}
              <Route path='/about' element={< AboutPage />} />
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/tasks' element={<Taskpage />} />
              <Route path='/task/:id' element={<TaskDetailPage />} />
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
