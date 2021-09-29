import Layout from 'layouts/Layout';
import Index from 'pages';
import Ventas from 'pages/Ventas';
import Login from 'pages/login';
import Menu from 'pages/menu';
import PrivateLayout from 'layouts/PrivateLayout';

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
          <Route path={['/menu','/Ventas']}>
            <PrivateLayout>
              <Switch>
                <Route path="/menu">
                  <Menu/>
                </Route>
                <Route path="/Ventas">
                  <Ventas/>
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
        </Switch>
      </Router>
    </div>  
  );
}
export default App;
