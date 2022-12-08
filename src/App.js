import './App.css';
import Layout from '../src/components/Layout.js'
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} 
      >
        <Route index element={<Home />} />
        <Route path='/' index element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
