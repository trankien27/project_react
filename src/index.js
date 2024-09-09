import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/user/User';
import { PersistGate } from 'redux-persist/integration/react'
import HomePage from './components/home/HomePage';
import Admin from './components/Admin/Admin';
import ManageUser from './components/Admin/Content/User/ManageUser';
import ManageProduct from './components/Admin/Content/Product/ManageProduct';
import Dashboard from './components/Admin/Content/Dashboard';
import Login from './components/Auth/Login';
import { ToastContainer } from 'react-toastify';
import Register from './components/Auth/Register';
import 'nprogress/nprogress.css'
import Product from './components/product/Product';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <React.StrictMode> */}
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<App />} >
            <Route index element={<HomePage />} />
            <Route path='user' element={<User />} />
            <Route path='product' element={<Product />} />
          </Route>

          <Route path='/admin' element={<Admin />} >
            <Route index element={<ManageProduct />} />
            <Route path='manage-product' element={<ManageProduct />} />
            <Route path='manage-user' element={<ManageUser />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
      {/* Same as */}
      <ToastContainer />
    </PersistGate>
    {/* </React.StrictMode> */}


  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
