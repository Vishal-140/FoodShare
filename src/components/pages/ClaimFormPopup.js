import React from 'react';
import './ClaimFormPopup.css';

const ClaimFormPopup = ({
  claimFormData,
  handleInputChange,
  handleClaimSubmit,
  setShowClaimForm,
  setClaimFormData,
}) => (
  <div className="overlay" onClick={() => setShowClaimForm(false)}>
    <div className="popup" onClick={(e) => e.stopPropagation()}>
      <h2>Claim Food Donation</h2>
      <form onSubmit={handleClaimSubmit} className="claim-form">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={claimFormData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="organization">Organization (optional)</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={claimFormData.organization}
            onChange={handleInputChange}
            placeholder="Enter organization name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={claimFormData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email (optional)</label>
          <input
            type="email"
            id="email"
            name="email"
            value={claimFormData.email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="purpose">Purpose of Claiming *</label>
          <textarea
            id="purpose"
            name="purpose"
            value={claimFormData.purpose}
            onChange={handleInputChange}
            placeholder="Explain why you need this food donation"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="numberOfPeople">Number of People *</label>
          <input
            type="number"
            id="numberOfPeople"
            name="numberOfPeople"
            value={claimFormData.numberOfPeople}
            onChange={handleInputChange}
            placeholder="Enter number of people"
            min="1"
            required
          />
        </div>

        <div className="button-group">
          <button type="submit" className="submit-button">
            Submit Claim
          </button>
          <button 
            type="button" 
            className="cancel-button"
            onClick={() => {
              setShowClaimForm(false);
              setClaimFormData({
                name: '',
                organization: '',
                phone: '',
                email: '',
                purpose: '',
                numberOfPeople: ''
              });
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default ClaimFormPopup;
