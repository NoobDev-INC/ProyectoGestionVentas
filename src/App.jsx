import Layout from 'layouts/Layout';
import Index from 'pages';
import loginPage from 'pages/login';
import Ventas from 'pages/Ventas'

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
       <Layout>
        <Switch>
          <Route path='/login'>
            <loginPage/>
          </Route>
          <Route path='/ventas'>
            <Ventas />
          </Route>
          <Route path='/'>
            <Index/>
          </Route> 
        </Switch>
       </Layout>
      </Router>
    </div>  
  );
}
export default App;
