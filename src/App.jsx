import Index from 'pages';
import loginPage from 'pages/login';
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
          <Route path='/login'>
            <loginPage/>
          </Route>
          <Route path='/'>
            <Index/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}
export default App;
