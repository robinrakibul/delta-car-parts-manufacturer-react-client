import { useAuthState } from 'react-firebase-hooks/auth';
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
import AddProducts from './components/Pages/Dashboard/AddProducts/AddProducts';
import AddReview from './components/Pages/Dashboard/AddReview';
import AllOrders from './components/Pages/Dashboard/AllOrders';
import AllUsers from './components/Pages/Dashboard/AllUsers';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import EachProfile from './components/Pages/Dashboard/EachProfile';
import ManageProducts from './components/Pages/Dashboard/ManageProducts/ManageProducts';
import MyOrders from './components/Pages/Dashboard/MyOrders/MyOrders';
import UpdateProfile from './components/Pages/Dashboard/UpdateProfile';
import Purchase from './components/Pages/Purchase/Purchase';
import auth from './firebase.init';
import Admin from './hooks/Admin';

function App() {
  const [user] = useAuthState(auth);
  const [admin] = Admin(user);
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
          <Route index element={admin ? <AllUsers></AllUsers> : <MyOrders></MyOrders>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route path="allorders" element={<AllOrders></AllOrders>}></Route>
          <Route path="myprofile" element={<EachProfile></EachProfile>}></Route>
          <Route path="updateprofile" element={<UpdateProfile></UpdateProfile>}></Route>
          <Route path="manageproducts" element={<ManageProducts></ManageProducts>}></Route>
          <Route path="addproducts" element={<AddProducts></AddProducts>}></Route>
          <Route path="users" element={
            <RequireAdmin>
              <AllUsers></AllUsers>
            </RequireAdmin>
          }></Route>
          <Route path="users/:email" element={
            <RequireAdmin>
              <EachProfile></EachProfile>
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
