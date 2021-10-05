import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import Login from 'pages/auth/Login'
import Index from 'pages/auth//Index'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Menu from 'routes/menu/Index'
export default function Main() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <div style={{ flex: 1 }}>
                    <Route path="/login" component={Login} exact />
                    <Route path="/menu" component={Menu} />
                    <Route path="/" component={Index} exact />
                </div>
            </Switch>
            <Footer />
        </Router>
    )
}
