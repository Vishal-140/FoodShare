import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#f8f9fa',
      padding: '64px 0 32px',
      color: '#4b5563',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '32px',
      marginBottom: '48px',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#16a34a',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    description: {
      lineHeight: '1.6',
      marginBottom: '24px',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    columnTitle: {
      color: '#111827',
      fontSize: '1.1rem',
      fontWeight: '600',
      marginBottom: '8px',
    },
    link: {
      color: '#4b5563',
      textDecoration: 'none',
      transition: 'color 0.3s',
      cursor: 'pointer',
    },
    socialLinks: {
      display: 'flex',
      gap: '16px',
      marginTop: '16px',
    },
    bottomBar: {
      borderTop: '1px solid #e5e7eb',
      paddingTop: '32px',
      textAlign: 'center',
      fontSize: '0.875rem',
    },
    smallText: {
      fontSize: '0.875rem',
    },
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.gridContainer}>
          {/* Company Info */}
          <div style={styles.column}>
            <div style={styles.logo}>
              🌱 FoodShare
            </div>
            <p style={styles.description}>
              Connecting surplus food from restaurants with those in need. 
              Together we can reduce food waste and fight hunger.
            </p>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.link} aria-label="Facebook">📘</a>
              <a href="#" style={styles.link} aria-label="Twitter">🐦</a>
              <a href="#" style={styles.link} aria-label="Instagram">📸</a>
              <a href="#" style={styles.link} aria-label="LinkedIn">💼</a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Quick Links</h3>
            <a href="/about" style={styles.link}>About Us</a>
            <a href="/how-it-works" style={styles.link}>How It Works</a>
            <a href="/restaurants" style={styles.link}>For Restaurants</a>
            <a href="/ngos" style={styles.link}>For NGOs</a>
            <a href="/blog" style={styles.link}>Blog</a>
          </div>

          {/* Support */}
          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Support</h3>
            <a href="/help" style={styles.link}>Help Center</a>
            <a href="/contact" style={styles.link}>Contact Us</a>
            <a href="/faq" style={styles.link}>FAQs</a>
            <a href="/terms" style={styles.link}>Terms of Service</a>
            <a href="/privacy" style={styles.link}>Privacy Policy</a>
          </div>

          {/* Contact Info */}
          <div style={styles.column}>
            <h3 style={styles.columnTitle}>Contact</h3>
            <p style={styles.smallText}>📍 123 Food Street</p>
            <p style={styles.smallText}>📞 (555) 123-4567</p>
            <p style={styles.smallText}>✉️ help@foodshare.org</p>
            <p style={styles.smallText}>⏰ Mon-Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <p>© {currentYear} FoodShare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;