import Layout from 'layouts/Layout';
import Index from 'pages/auth/Index';
import Login from 'pages/auth/Login';
import Menu from 'pages/admin/Menu'
import Usuarios from 'pages/users/Usuarios';
import Actualizar from 'pages/users/Actualizar';
import Productos from 'pages/product/Productos';
import Ventas from 'pages/sale/Ventas';
import PrivateLayout from 'layouts/PrivateLayout';
import InternLayout from 'layouts/InternLayout';
import AuthLayout from 'layouts/AuthLayout';
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
          <Route path={['/Ventas','/Productos','/Usuarios','/Actualizar']}>
            <InternLayout>
              <Switch>
                <Route path="/Ventas">
                  <Ventas/>
                </Route>
                <Route path="/Productos">
                  <Productos/>
                </Route>
                <Route path="/Usuarios">
                  <Usuarios/>
                </Route>
                <Route path="/Actualizar">
                  <Actualizar/>
                </Route>
              </Switch>
            </InternLayout>
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