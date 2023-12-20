import logo from './logo.svg';
import './App.css';
import Navbar from './Customer/Components/Nav/Navbar';
import HomePage from './Customer/Pages/HomePage/HomePage';
import Product from './Customer/Components/Product/Product';
import Footer from '../src/Customer/Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <div>
        <HomePage/>
        <Product/>
      </div>
      <div>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
