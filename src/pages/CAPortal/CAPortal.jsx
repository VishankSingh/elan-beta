import './CAPortal.css'

import {useState} from "react";
import axios from 'axios';

import LoginPage from "../../components/CAPortal/LoginPage/LoginPage.jsx";
import AdminPage from "../../components/CAPortal/AdminPage/AdminPage.jsx";
import UserPage from "../../components/CAPortal/UserPage/UserPage.jsx";

function CAPortal() {
  const [currentPage, setCurrentPage] = useState('login');
  const [userData, setUserData] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/api/login', { email, password });
      if (response.status === 200) {
        setUserData(response.data.data);
        if (response.data.data.role === 'admin') {
          setCurrentPage('admin');
        } else if (response.data.data.role === 'user') {
          setCurrentPage('user');
        }
      }
    } catch (error) {
      if (error.response) {
        alert(`Login failed: ${error.response.data.message}`);
      } else {
        alert('Network error');
      }
    }
  };


  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      case 'admin':
        return <AdminPage user={userData} />;
      case 'user':
        return <UserPage user={userData} />;
      default:
        return <LoginPage onLogin={handleLogin} />;
    }
  };
  return (
    <>
      {renderPage()}
    </>
  )
}

export default CAPortal;