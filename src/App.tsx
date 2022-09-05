import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import Reports from './Pages/Report';
import Products from './Pages/Product';
import SignIn from './BigPages/SignIn';


function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: 'admin123'
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("")

  const Login = (details?: any) => {
    console.log(details)

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      console.log("Details do not match!")
      setError("Details do not match!")
    }
  }

  return (
    <>
      {(user.email !== "") ? (
        <Router>
          <Navbar />
          <h1 style={{width:'70%', margin: 'auto',textAlign: 'center', fontSize:'50px'}}>Welcom,<span>{user.name}</span> </h1>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </Router>
      ) : (
        <SignIn Login={Login} error={error}/>
      )}
    </>
  );
}

export default App;
