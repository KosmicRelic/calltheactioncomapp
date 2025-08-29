import styles from './App.module.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.app}>
      <Banner />
      <Header />
      <Hero />
      <Benefits />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;