import React, { useEffect } from 'react';
import NavbarBack from 'components/NavbarBack';
import Footer from 'components/Footer';
import 'styles/styles.css';
const BackLayout = ({ children }) => {
    
    return (
        <div className='mainContainer'>
            <NavbarBack/>
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default BackLayout
