import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/user/User';
import Login from './components/login/Login';
import HomePage from './components/home/HomePage';
import Admin from './components/Admin/Admin';
import ManageUser from './components/Admin/Content/User/ManageUser';
import ManageProduct from './components/Admin/Content/Product/ManageProduct';
import Dashboard from './components/Admin/Content/Dashboard';
import Register from './components/login/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<App />} >
            <Route index element={<HomePage />} />
            <Route path='User' element={<User />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>

          <Route path='/admin' element={<Admin />} >
            <Route index element={<Dashboard />} />
            <Route path='manage-product' element={<ManageProduct />} />
            <Route path='manage-user' element={<ManageUser />} />
          </Route>
          {/* <Route path='/admin' element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path='manage-user' element={<ManageUser />} />
            <Route path='manage-product' element={<ManageProduct />} />
          </Route> */}
        </Routes>
      </BrowserRouter>

    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
