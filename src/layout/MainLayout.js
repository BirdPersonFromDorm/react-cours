import React from 'react';
import Header from "../components/Header";

const MainLayout = ({children}) => {
    return (
        <div className="main-layout">
            <Header/>
            {children}
        </div>
    );
};

export default MainLayout;