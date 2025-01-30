import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/common/Footer';
import NavBar from './components/common/NavBar';
import Home from './components/pages/HomePage';
import FindFood from './components/pages/FindFood';
import DonateFood from './components/pages/DonateFood';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-food" element={<FindFood />} />
          <Route path="/donate-food" element={<DonateFood />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
