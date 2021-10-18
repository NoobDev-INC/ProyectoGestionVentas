import Header from 'components/Header';
import Footer from 'components/Footer';
import React from 'react';
import 'styles/styles.css';

const PrivateLayout = ({children}) => {
    return (
        <PrivateRoute>
            <div className = 'mainContainer'>
            <Header/>
            <main>{children}</main>
            <Footer/>   
        </div>
        </PrivateRoute>
    )
}

export default PrivateLayout