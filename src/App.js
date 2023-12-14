import logo from './logo.svg';
import './App.css';
import Navbar from './Customer/Components/Nav/Navbar';
import HomePage from './Customer/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar/>
      </div>
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;
