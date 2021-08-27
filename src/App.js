import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Signin from './pages/Signin';
import Cart from './pages/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';
import Register from './pages/Register';
import PlaceOrder from './pages/PlaceOrder';



function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
    <div>
        <div className="grid-container">
            <header className="row">
              <div>
                <Link className="brand" to="/">Styletude</Link>
              </div>
              <div>
                <Link to="/cart">Cart
                {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
                )}
                </Link>                
                {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
              </div>
            </header>            
            <main>
             <Route path="/cart/:id?" component={Cart} ></Route>
             <Route path="/product/:id" component={ProductDetails} ></Route> 
             <Route path="/signin" component={Signin}></Route>
             <Route path="/register" component={Register}></Route>
             <Route path="/" component={Home} exact></Route>
             <Route path="/placeorder" component={PlaceOrder}></Route>              
            </main>
            <footer className="row center"> <p>© 2021 Styletude. All rights reserved | Design by <span>#Suzan_Naeem</span></p></footer>
          </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
