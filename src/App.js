import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/LoginSystem/Login';
import Register from './components/LoginSystem/Register';
import RequireAdmin from './components/LoginSystem/RequireAdmin';
import RequireAuth from './components/LoginSystem/RequireAuth';
import AddReview from './components/Pages/Dashboard/AddReview';
import AllUsers from './components/Pages/Dashboard/AllUsers';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import MyOrders from './components/Pages/Dashboard/MyOrders';
import MyProfile from './components/Pages/Dashboard/MyProfile';
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
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
          <Route path="users" element={
            <RequireAdmin>
              <AllUsers></AllUsers>
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
