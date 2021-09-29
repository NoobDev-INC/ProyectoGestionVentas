import Footer from 'components/Footer'
import React from 'react'
import 'styles/styles.css';
import Navbar from 'components/Navbar';

const Layout = ({children}) => {
    return (
        <div className = 'mainContainer'>
            <Navbar/>
            <main>{children}</main>
            <Footer/>   
        </div>
    )
}

export default Layout
