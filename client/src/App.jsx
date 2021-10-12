import { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Products from './screens/Products/Products';
import ProductEdit from './screens/ProductEdit/ProductEdit';
import ProductDetail from './screens/ProductDetail/ProductDetail';
import ProductCreate from './screens/ProductCreate/ProductCreate';
import Home from './screens/Home/Home';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import SignOut from './screens/SignOut/SignOut';
import { verifyUser } from './services/users';
import './App.css';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
        <Home user={user} />
        </Route>
        <Route exact path="/products/:category">
        <Products user={user} />
        </Route>
        <Route exact path="/products/:id/edit">
          {user ? <ProductEdit user={user} /> : <Redirect to='/' />}
        </Route>
        <Route path="/add-product">
        {user ? <ProductCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/products/:category/:id">
        <ProductDetail user={user} />
        </Route>
        <Route path="/sign-in">
        <SignIn setUser={setUser} />
        </Route>
        <Route path="/sign-up">
        <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
