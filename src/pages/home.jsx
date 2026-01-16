import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Feature';

const Home = () => {
  return (
  <div className="bg-gray-950">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <Features />
      </div>
    </div>
  )
}

export default Home;
