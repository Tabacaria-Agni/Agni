import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { AboutPage } from './pages/AboutPage';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/about' element={<AboutPage/>}/>
    </Routes>
  );
};

export default Router;
