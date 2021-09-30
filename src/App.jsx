import Layout from 'layouts/Layout';
import Index from 'pages/Index';
import Ventas from 'pages/Ventas';
import Login from 'pages/Login';
import Menu from 'pages/Menu';
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
          <Route path={['/Ventas']}>
            <InternLayout>
              <Switch>
                <Route path="/Ventas">
                  <Ventas/>
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
