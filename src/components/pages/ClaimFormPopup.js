import React, { useState } from 'react';
import './ClaimFormPopup.css';

const ClaimFormPopup = ({ donation, setShowClaimForm, setClaimedDonations }) => {
  const [claimDetails, setClaimDetails] = useState({ name: '', phone: '', reason: '' });
  const [error, setError] = useState('');

  // Ensure donation is provided
  if (!donation) return null;

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClaimDetails({ ...claimDetails, [name]: value });
  };

  // Basic form validation
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!claimDetails.name || !claimDetails.phone || !claimDetails.reason) {
      setError('All fields are required');
      return;
    }

    // Store claim in local storage
    const savedClaims = JSON.parse(localStorage.getItem('foodClaims') || '[]');
    savedClaims.push({ donationId: donation.id, claimDetails });
    localStorage.setItem('foodClaims', JSON.stringify(savedClaims));

    // Update claimed donations and close the form
    setClaimedDonations((prev) => ({ ...prev, [donation.id]: claimDetails }));
    setShowClaimForm(false);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Claim Food from {donation.restaurantName || 'Unknown Restaurant'}</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={claimDetails.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={claimDetails.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
            placeholder="Enter 10-digit phone number"
          />

          <label htmlFor="reason">Reason:</label>
          <textarea
            id="reason"
            name="reason"
            value={claimDetails.reason}
            onChange={handleChange}
            required
          />

          <div className="button-group">
            <button type="submit">Submit Claim</button>
            <button type="button" className="cancel-btn" onClick={() => setShowClaimForm(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClaimFormPopup;
