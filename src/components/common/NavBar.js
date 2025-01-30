import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const styles = {
    navbar: {
      backgroundColor: '#ffffff',
      padding: '1rem 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#16a34a',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    nav: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    mobileNav: {
      display: 'none',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      padding: '1rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      '@media (max-width: 768px)': {
        display: isMenuOpen ? 'block' : 'none',
      },
    },
    mobileNavLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    link: {
      color: '#4b5563',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'color 0.3s',
      cursor: 'pointer',
    },
    button: {
      backgroundColor: '#16a34a',
      color: '#ffffff',
      padding: '0.5rem 1rem',
      borderRadius: '6px',
      border: 'none',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    hamburger: {
      display: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0.5rem',
      '@media (max-width: 768px)': {
        display: 'block',
      },
    },
  };

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'How It Works', href: '/how-it-works' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <header style={styles.navbar}>
      <div style={styles.container}>
        <a href="/" style={styles.logo}>
          🌱 FoodShare
        </a>

        {/* Desktop Navigation */}
        <nav style={styles.nav}>
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} style={styles.link}>
              {link.title}
            </a>
          ))}
          <button style={styles.button}>Get Started</button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          style={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Mobile Navigation */}
        <div style={styles.mobileNav}>
          <div style={styles.mobileNavLinks}>
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} style={styles.link}>
                {link.title}
              </a>
            ))}
            <button style={styles.button}>Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;