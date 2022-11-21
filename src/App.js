import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './screens/home/Home';
import Product from './screens/product/Product';
import Contact from './screens/contact/Contact';
import About from './screens/about/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
