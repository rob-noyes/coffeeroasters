import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import Header from './components/Header';
import { AboutUs } from './pages/AboutUs';
import Home from './pages/Home';
import { Subscribe } from './pages/Subscribe';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/subscribe' element={<Subscribe />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
