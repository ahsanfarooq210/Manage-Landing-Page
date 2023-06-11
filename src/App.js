import './App.css';
import NavBar from './components/nav-bar/NavBar';
import HeroSection from './components/hero-section/HeroSection';
import FeaturesSection from './components/features-section/FeaturesSection';
import Testimoniols from './components/testimoniols/Testimoniols';
import CTA from './components/CTA/CTA';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <FeaturesSection/>
      <Testimoniols/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
