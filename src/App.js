import './App.css';
import Footer from './components/common/Footer';
import NavBar from './components/common/NavBar';
import Home from './components/pages/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
