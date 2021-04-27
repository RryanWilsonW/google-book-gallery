import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Search from './components/pages/Search';
import Saved from './components/pages/Saved';
import './app.css';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/'>
              <Search />
            </Route>
            <Route>
              <Saved />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
