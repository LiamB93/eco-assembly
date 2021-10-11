import { Route, Switch, Redirect } from 'react-router-dom'
import Products from './screens/Products/Products';
import ProductEdit from './screens/ProductEdit/ProductEdit';
import ProductDetail from './screens/ProductDetail/ProductDetail';
import Home from './screens/Home/Home';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id/edit">
          <ProductEdit />
        </Route>
        <Route exact path="/products/:id">
          <ProductDetail />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
