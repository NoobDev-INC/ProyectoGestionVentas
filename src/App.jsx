import Index from 'pages/auth/Index';
import Login from 'pages/auth/Login';
import Menu from 'pages/admin/Menu'
import Usuarios from 'pages/users/Usuarios';
import Actualizar from 'pages/users/Actualizar';
import Informacion from 'pages/users/Informacion';
import Productos from 'pages/product/Productos';
import Ventas from 'pages/sale/Ventas';
import ActualizarV from 'pages/sale/ActualizarV';
import InformacionV from 'pages/sale/InformacionV';
import BuscarV from 'pages/sale/BuscarV';
import Layout from 'layouts/Layout';
import PrivateLayout from 'layouts/PrivateLayout';
import InternLayout from 'layouts/InternLayout';
import AuthLayout from 'layouts/AuthLayout';
import BackLayout from 'layouts/BackLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import 'styles/styles.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={['/Menu']}>
            <PrivateLayout>
              <Switch>
                <Route path="/Menu" component={Menu}/>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/Productos', '/Usuarios', '/Ventas']}>
            <InternLayout>
              <Switch>
                <Route path="/Productos" component={Productos}/>
                <Route path="/Usuarios" component={Usuarios}/>
                <Route path="/Ventas" component={Ventas}/>
              </Switch>
            </InternLayout>
          </Route>
          <Route path={['/ActualizarV','/InformacionV', '/BuscarV', '/Actualizar','/Informacion']}>
            <BackLayout>
              <Switch>
                <Route path="/ActualizarV" component={ActualizarV} />
                <Route path="/InformacionV" component={InformacionV}/>
                <Route path="/BuscarV" component={BuscarV}/>
                <Route path="/Actualizar" component={Actualizar}/>
                <Route path="/Informacion" component={Informacion}/>
              </Switch>
            </BackLayout>
          </Route>
          <Route path={['/Login']}>
            <AuthLayout>
              <Switch>
                <Route path="/Login" component={Login}/>
              </Switch>
            </AuthLayout>
          </Route>
          <Route path={['/']}>
            <Layout>
              <Switch>
                <Route path='/Index' component={Index}/>
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;