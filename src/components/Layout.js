import Navbar  from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import { Outlet } from 'react-router-dom'

const Layout = ({ }) => {
  return (
    <div className="App">
      <Navbar />      
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout