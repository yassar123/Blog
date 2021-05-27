
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './screen/Home';
import Posts from './screen/Posts';
import Details from './screen/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Posts">
            <Posts />
          </Route>
          <Route path="/Details">
            <Details />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
