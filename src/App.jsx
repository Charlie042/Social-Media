import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { LoginPage } from './pages/loginPage/LoginPage';
import { RegisterPage } from './pages/registerPage/RegisterPage';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<RegisterPage/>}/>
      <Route path='login' element={<LoginPage/>}/>
    <>
   {/* <LoginPage/> */}
   
   </>
   </Routes>
   </BrowserRouter>
  );
};

export default App;
