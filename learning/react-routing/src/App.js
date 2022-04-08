import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Switch>
          {/* <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route> */}
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
          <Route path="/">
            <Redirect to="/welcome" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => welcome component.
// our-domain.com/products => Products compoent
// our-domain.com/product-details/product1 => product details component with product data.
