import './App.css';
import { Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
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
