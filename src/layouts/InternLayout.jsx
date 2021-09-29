import InternNavbar from 'components/InternNavbar';
import Footer from 'components/Footer';
import React from 'react';
import 'styles/styles.css';

const InternLayout = ({children}) => {
    return (
        <div className = 'mainContainer'>
            <InternNavbar/>
            <main>{children}</main>
            <Footer/>   
        </div>
    )
}

export default InternLayout