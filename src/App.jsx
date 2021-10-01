import Layout from 'layouts/Layout';
import Index from 'pages/auth/Index';
import Login from 'pages/auth/Login';
import Menu from 'pages/admin/Menu'
import Usuarios from 'pages/users/Usuarios';
import Actualizar from 'pages/users/Actualizar';
import Productos from 'pages/product/Productos';
import Ventas from 'pages/sale/Ventas';
import InformacionV from 'pages/sale/InformacionV';
import BuscarV from 'pages/sale/BuscarV';
import ActualizarV from 'pages/sale/ActualizarV';
import PrivateLayout from 'layouts/PrivateLayout';
import InternLayout from 'layouts/InternLayout';
import AuthLayout from 'layouts/AuthLayout';
import BackLayout from 'layouts/BackLayout';
import{
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
          <Route path={['/Index']}>
            <Layout>
              <Switch>
                <Route path='/Index'>
                  <Index/>
                </Route>
              </Switch>
            </Layout>
          </Route>
          <Route path={['/Menu']}>
            <PrivateLayout>
              <Switch>
                <Route path="/Menu">
                  <Menu/>
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/Productos','/Usuarios','/Actualizar','/Ventas']}>
            <InternLayout>
              <Switch>
                <Route path="/Productos">
                  <Productos/>
                </Route>
                <Route path="/Usuarios">
                  <Usuarios/>
                </Route>
                <Route path="/Actualizar">
                  <Actualizar/>
                </Route>
                <Route path="/Ventas">
                  <Ventas/>
                </Route>
              </Switch>
            </InternLayout>
          </Route>
          <Route path={['/ActualizarV','/InformacionV','/BuscarV']}>
            <BackLayout>
              <Switch>
                <Route path="/ActualizarV">
                  <ActualizarV/>
                  </Route>
                <Route path="/InformacionV">
                  <InformacionV/>
                  </Route>
                <Route path="/BuscarV">
                  <BuscarV/>
                  </Route>
              </Switch>
            </BackLayout>
          </Route>
          <Route path={['/Login']}>
            <AuthLayout>
              <Switch>
                <Route path="/Login">
                  <Login/>
                </Route>
              </Switch>
            </AuthLayout>
          </Route>
        </Switch>
      </Router>
    </div>  
  );
}
export default App;