import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import LoginRegistrationFooter from '../components/login-registration/LoginRegistrationFooter';


const LoginRegistrationLayout = () => {
    return (
        <div>
           <div className="navbar bg-base-100">
               <ul className="menu menu-horizontal px-1">
                     <li><Link to={"login"} className="btn btn-ghost text-red-500 font-bold text-xl">Login</Link></li>
                      <li><Link to={"register"} className="btn btn-ghost text-red-500 font-bold text-xl">Sign Up</Link></li>
               </ul>
           </div>
            <Outlet/>
            <LoginRegistrationFooter/>
        </div>
    );
};

export default LoginRegistrationLayout;