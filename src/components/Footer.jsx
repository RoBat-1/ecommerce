import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ShopHub</h3>
          <p>Your one-stop shop for everything you need.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Help Center</li>
            <li>Track Order</li>
            <li>Returns</li>
            <li>Shipping Info</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
            <span>💼</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 ShopHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
