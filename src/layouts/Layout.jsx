import Header from 'components/Header'
import Footer from 'components/Footer'
import React from 'react'
import 'styles/styles.css';

const Layout = ({children}) => {
    return (
        <div className = 'mainContainer'>
            <Header/>
            <main>{children}</main>
            <Footer/>   
        </div>
    )
}

export default Layout
