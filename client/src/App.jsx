import { Route, Switch, Redirect } from 'react-router-dom'
import Products from './screens/Products/Products';
import Home from './screens/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
