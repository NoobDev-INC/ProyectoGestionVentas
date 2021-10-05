import React from 'react'
import { Route } from "react-router-dom"
import Ventas from 'pages/sale/Ventas'
import Productos from 'pages/product/Productos'
import Usuarios from 'pages/users/Usuarios'
import Menu from 'pages/admin/Menu'
export default function Index() {
    return (
        <>
            <Route path="/menu" component={Menu} exact />
            <Route path="/menu/ventas" component={Ventas} exact />
            <Route path="/menu/productos" component={Productos} exact />
            <Route path="/menu/usuarios" component={Usuarios} exact />
        </>



    )
}
