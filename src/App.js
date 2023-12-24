import { Routes, Route} from "react-router-dom";
import "./App.css";
import { Home, } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import {Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Navbar } from "./Components/Navbar";
import {useState} from 'react';
import { PrivateRoute } from "./Components/PrivateRoute";
function App() {
  const[IsLoggedIn, SetIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar IsLoggedIn = {IsLoggedIn} SetIsLoggedIn = {SetIsLoggedIn}/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Login" element = {<Login SetIsLoggedIn = {SetIsLoggedIn}/>}/>
        <Route path = "/Signup" element = {<Signup SetIsLoggedIn = {SetIsLoggedIn}/>}/>
        <Route path = "/Dashboard" element = {
          <PrivateRoute IsLoggedIn = {IsLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
