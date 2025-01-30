import React from 'react';

const HomePage = () => {
  const features = [
    {
      title: "Restaurant Partners",
      description: "Connect with local restaurants ready to donate surplus food",
      icon: "🍽️"
    },
    {
      title: "Real-time Tracking",
      description: "Track food donations and deliveries in real-time",
      icon: "⏰"
    },
    {
      title: "Location Services",
      description: "Find nearby food donation points and recipients",
      icon: "📍"
    }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#ffffff',
    },
    heroSection: {
      backgroundColor: '#f0fdf4',
      padding: '64px 0',
    },
    contentWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
    },
    heroContent: {
      textAlign: 'center',
    },
    heading: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: '16px',
    },
    subheading: {
      fontSize: '1.25rem',
      color: '#4b5563',
      marginBottom: '32px',
    },
    buttonContainer: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
    },
    primaryButton: {
      backgroundColor: '#16a34a',
      color: '#ffffff',
      padding: '12px 24px',
      borderRadius: '8px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#16a34a',
      padding: '12px 24px',
      borderRadius: '8px',
      fontWeight: '600',
      border: '1px solid #16a34a',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    featuresSection: {
      padding: '64px 0',
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
    },
    featureCard: {
      backgroundColor: '#ffffff',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      border: '1px solid #e5e7eb',
    },
    featureIcon: {
      fontSize: '2rem',
      marginBottom: '16px',
    },
    featureTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '8px',
    },
    featureDescription: {
      color: '#4b5563',
    },
    howItWorks: {
      backgroundColor: '#f9fafb',
      padding: '64px 0',
    },
    howItWorksTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '48px',
    },
    stepsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '32px',
      textAlign: 'center',
    },
    stepIconContainer: {
      backgroundColor: '#dcfce7',
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px',
      fontSize: '2rem',
    },
    ctaSection: {
      padding: '64px 0',
    },
    ctaCard: {
      backgroundColor: '#16a34a',
      borderRadius: '8px',
      padding: '32px',
      textAlign: 'center',
      color: '#ffffff',
    },
    ctaButton: {
      backgroundColor: '#ffffff',
      color: '#16a34a',
      padding: '12px 24px',
      borderRadius: '8px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    }
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.contentWrapper}>
          <div style={styles.heroContent}>
            <h1 style={styles.heading}>Reduce Food Waste, Feed Hope</h1>
            <p style={styles.subheading}>
              Connecting surplus food from restaurants with those who need it most
            </p>
            <div style={styles.buttonContainer}>
              <button style={styles.primaryButton}>Donate Food</button>
              <button style={styles.secondaryButton}>Find Food</button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.featuresSection}>
        <div style={styles.contentWrapper}>
          <div style={styles.featureGrid}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div style={styles.howItWorks}>
        <div style={styles.contentWrapper}>
          <h2 style={styles.howItWorksTitle}>How It Works</h2>
          <div style={styles.stepsGrid}>
            <div>
              <div style={styles.stepIconContainer}>🍽️</div>
              <h3 style={styles.featureTitle}>Restaurants Register</h3>
              <p style={styles.featureDescription}>Sign up and list available surplus food</p>
            </div>
            <div>
              <div style={styles.stepIconContainer}>👥</div>
              <h3 style={styles.featureTitle}>NGOs Connect</h3>
              <p style={styles.featureDescription}>Browse and claim available donations</p>
            </div>
            <div>
              <div style={styles.stepIconContainer}>❤️</div>
              <h3 style={styles.featureTitle}>Food Reaches Those in Need</h3>
              <p style={styles.featureDescription}>Coordinate pickup and delivery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={styles.ctaSection}>
        <div style={styles.contentWrapper}>
          <div style={styles.ctaCard}>
            <h2 style={{...styles.heading, color: '#ffffff'}}>Ready to Make a Difference?</h2>
            <p style={{...styles.subheading, color: '#ffffff', opacity: 0.9}}>
              Join our mission to reduce food waste and help those in need
            </p>
            <button style={styles.ctaButton}>
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;