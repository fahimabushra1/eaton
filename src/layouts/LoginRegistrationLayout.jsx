import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginRegistrationFooter from '../components/login-registration/LoginRegistrationFooter';

const LoginRegistrationLayout = () => {
    return (
        <div>
            <Outlet/>
            <LoginRegistrationFooter/>
        </div>
    );
};

export default LoginRegistrationLayout;