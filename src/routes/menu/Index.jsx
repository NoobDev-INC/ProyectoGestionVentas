import React from 'react'
import { Route } from "react-router-dom"
import Ventas from 'pages/sale/Ventas'
import Productos from 'pages/product/Productos'
import Usuarios from 'pages/users/Usuarios'
import Menu from 'pages/admin/Menu'
//import { Auth0Provider } from "@auth0/auth0-react";
export default function Index() {
    return (
       // <Auth0Provider
           /*  domain="proyecto-ventas.us.auth0.com"
            clientId="ZbygeOmsoI68EwmJ79f8DA7A1tP4cl1V"
            redirectUri={window.location.origin} */
        //>
            <>
            <Route path="/menu" component={Menu} exact />
            <Route path="/menu/ventas" component={Ventas} exact />
            <Route path="/menu/productos" component={Productos} exact />
            <Route path="/menu/usuarios" component={Usuarios} exact />
        </>

        //</Auth0Provider>
        



    )
}
