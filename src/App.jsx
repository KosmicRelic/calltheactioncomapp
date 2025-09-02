
import styles from './App.module.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Careers from './components/Careers';
import About from './components/About';
import Partner from './components/Partner';
import Marketing from './components/Marketing';
import Sales from './components/Sales';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Banner />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Benefits />
                <Testimonials />
              </>
            }
          />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;