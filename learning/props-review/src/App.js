import logo from './logo.svg';
import './App.css';
import Product from './components/Product';

function App() {
  const getNameHandler = (nameInput) => {
    console.log(nameInput);
  };

  return (
    <div className="App">
      <Product onAddName={getNameHandler} />
    </div>
  );
}

export default App;
