import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import Header from './components/Header';
import { AboutUs } from './pages/AboutUs';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
