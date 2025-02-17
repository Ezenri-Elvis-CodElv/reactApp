import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>About WatchList</h2>
        <p>
          Welcome to WatchList, your ultimate destination for premium wristwatches. 
          We offer a carefully curated collection of timeless and modern pieces, ensuring 
          elegance and functionality for every occasion. From luxury brands to stylish casuals, 
          find the perfect watch that complements your personality.
        </p>
      </div>

      {/* Divider Line */}
      <div className="footer-divider"></div>

      {/* Bottom Layer: Social Media & Copyright */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} WatchList. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
