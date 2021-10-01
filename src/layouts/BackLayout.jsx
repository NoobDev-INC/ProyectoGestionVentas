import NavbarBack from 'components/NavbarBack';
import React from 'react';
import Footer from 'components/Footer';
import 'styles/styles.css';
const BackLayout = ({children}) => {
    return (
        <div className='mainContainer'>
            <NavbarBack/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default BackLayout
