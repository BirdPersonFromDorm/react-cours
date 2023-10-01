import React from 'react';
import {Outlet} from 'react-router-dom'

const LoginLayout = () => {
    return (
        <div className="main-layout">
            <div className="login-header">
                Login
            </div>
            <Outlet/>
        </div>
    );
};

export default LoginLayout;