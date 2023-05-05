import { Routes, Route } from 'react-router-dom';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { Dashboard } from './pages/Dashboard';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { Politicapage } from './pages/Politicas';
import { UserProvider } from './providers/UserContext';
import { Navigate } from 'react-router-dom';
const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/politica' element={<Politicapage/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/dashboard' element={
            <UserProvider>
              <Dashboard/>
            </UserProvider>
          }/>
        </Route>

        <Route path="/login" element={<Navigate to="/"/>}/>
        <Route path="/home" element={<Navigate to="/"/>}/>

        <Route path="/cadastro" element={<Navigate to="/register"/>}/>
            
        <Route path="*" element={<h1>Página não encontrada</h1>}/>

    </Routes>
  );
};

export default Router;
