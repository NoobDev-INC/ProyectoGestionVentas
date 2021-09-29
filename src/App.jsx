import Layout from 'layouts/Layout';
import Index from 'pages';
import Ventas from 'pages/Ventas';
import Login from 'pages/login';
import Menu from 'pages/menu';
import PrivateLayout from 'layouts/PrivateLayout';
import InternLayout from 'layouts/InternLayout';
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
          <Route path={['/index']}>
            <Layout>
              <Switch>
                <Route path='/Index'>
                  <Index/>
                </Route>
              </Switch>
            </Layout>
          </Route>
          <Route path={['/menu']}>
            <PrivateLayout>
              <Switch>
                <Route path="/menu">
                  <Menu/>
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/ventas']}>
            <InternLayout>
              <Switch>
                <Route path="/ventas">
                  <Ventas/>
                </Route>
              </Switch>
            </InternLayout>
          </Route>
        </Switch>
      </Router>
    </div>  
  );
}
export default App;
