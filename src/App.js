import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/LoginSystem/Login';
import Register from './components/LoginSystem/Register';
import RequireAuth from './components/LoginSystem/RequireAuth';
import Purchase from './components/Pages/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/items/:itemsId' element={
        <RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>
      }></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
