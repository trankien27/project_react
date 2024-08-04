import logo from './logo.svg';
import './App.scss';
import Header from './components/header/Header';
import { Outlet, Link } from "react-router-dom";
import SideBar from './components/Admin/SideBar';


const App = () => {

  return (
    <div className='app-container'>
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <div className='sidanav-container'>

        </div>
        <div className='app-content'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App;
