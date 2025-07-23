import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="homeContainer">
      <header className="header">
        <h1>Welcome to Digital Ration Portal</h1>
        <p>Empowering citizens with digital access to ration services</p>
        <Link to="/login" className="ctaButton">Get Started</Link>
      </header>

      <section className="features">
        <div className="featureCard">
          <h3>Apply Ration Card</h3>
          <p>Fill details and apply online for a new ration card.</p>
        </div>
        <div className="featureCard">
          <h3>Track Allotments</h3>
          <p>Check your monthly ration and delivery status.</p>
        </div>
        <div className="featureCard">
          <h3>Update Details</h3>
          <p>Request updates for address, members, or mobile number.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Digital Ration Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
