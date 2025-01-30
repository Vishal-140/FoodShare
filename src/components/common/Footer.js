import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              🌱 FoodShare
            </div>
            <p className="footer-description">
              Connecting surplus food from restaurants with those in need. 
              Together we can reduce food waste and fight hunger.
            </p>
            
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-column-title">Quick Links</h3>
            <a href="/about" className="footer-link">About Us</a>
            <a href="/how-it-works" className="footer-link">How It Works</a>
            <a href="/restaurants" className="footer-link">For Restaurants</a>
            <a href="/ngos" className="footer-link">For NGOs</a>
            <a href="/blog" className="footer-link">Blog</a>
          </div>

          {/* Support */}
          <div className="footer-column">
            <h3 className="footer-column-title">Support</h3>
            <a href="/help" className="footer-link">Help Center</a>
            <a href="/contact" className="footer-link">Contact Us</a>
            <a href="/faq" className="footer-link">FAQs</a>
            <a href="/terms" className="footer-link">Terms of Service</a>
            <a href="/privacy" className="footer-link">Privacy Policy</a>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h3 className="footer-column-title">Contact</h3>
            <p className="small-text">📍 123 Food Street</p>
            <p className="small-text">📞 (555) 123-4567</p>
            <p className="small-text">✉️ help@foodshare.org</p>
            <p className="small-text">⏰ Mon-Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom-bar">
          <p>© {currentYear} FoodShare. All rights reserved.</p>
          <p> Developed by Vishal Kumar Chaurasia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;