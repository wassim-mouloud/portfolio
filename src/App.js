import './App.css';
import Navbar from './components/Navbar';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
