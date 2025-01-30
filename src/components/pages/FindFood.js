import React, { useState, useEffect } from 'react';
import { database } from '../auth/firebase';
import { ref, push, set, onValue, off, update } from 'firebase/database';
import './FindFood.css';

const FindFood = () => {
  const [donations, setDonations] = useState([]);
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);
  const [claimedDonations, setClaimedDonations] = useState({});
  const [claimFormData, setClaimFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    email: '',
    purpose: '',
    numberOfPeople: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClaimFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleClaimClick = (donation) => {
    setSelectedDonation(donation);
    setShowClaimForm(true);
  };

  useEffect(() => {
    const donationsRef = ref(database, 'donations');
    const claimsRef = ref(database, 'claims');

    onValue(donationsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const donationsList = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value
        }));
        setDonations(donationsList);
      }
    });

    onValue(claimsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const claimsObject = Object.entries(data).reduce((acc, [key, value]) => {
          acc[value.donationId] = value.claimDetails;
          return acc;
        }, {});
        setClaimedDonations(claimsObject);
      }
    });

    return () => {
      off(donationsRef);
      off(claimsRef);
    };
  }, []);

  const handleClaimSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const claimsRef = ref(database, 'claims');
      const newClaimRef = push(claimsRef);
      
      const claimRecord = {
        donationId: selectedDonation.id,
        claimDetails: claimFormData,
        claimedAt: new Date().toISOString()
      };

      await set(newClaimRef, claimRecord);

      setClaimedDonations(prev => ({
        ...prev,
        [selectedDonation.id]: claimFormData
      }));

      const donationRef = ref(database, `donations/${selectedDonation.id}`);
      await update(donationRef, { claimed: true });

      setClaimFormData({
        name: '',
        organization: '',
        phone: '',
        email: '',
        purpose: '',
        numberOfPeople: ''
      });
      setShowClaimForm(false);
      setSelectedDonation(null);

      alert('Thank you for your claim! The restaurant will contact you shortly.');
    } catch (error) {
      console.error('Error submitting claim:', error);
      alert('Failed to submit claim. Please try again.');
    }
  };

  const ClaimFormPopup = () => (
    <div className="overlay" onClick={() => setShowClaimForm(false)}>
      <div className="popup" onClick={e => e.stopPropagation()}>
        <h2>Claim Food Donation</h2>
        <form onSubmit={handleClaimSubmit}>
          <div className="form-group">
            <label>Name *</label>
            <input
              type="text"
              name="name"
              value={claimFormData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label>Organization (if applicable)</label>
            <input
              type="text"
              name="organization"
              value={claimFormData.organization}
              onChange={handleInputChange}
              placeholder="Enter organization name (optional)"
            />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="tel"
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
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={claimFormData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label>Purpose of Claiming *</label>
            <textarea
              name="purpose"
              value={claimFormData.purpose}
              onChange={handleInputChange}
              placeholder="Please explain why you need this food donation"
              required
            />
          </div>

          <div className="form-group">
            <label>Number of People to be Fed *</label>
            <input
              type="number"
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
                setSelectedDonation(null);
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

  return (
    <div className="find-food-container">
      <h1>Available Food Donations</h1>
      <div className="donation-list">
        {donations.length > 0 ? (
          donations.map((donation) => {
            const isClaimed = claimedDonations[donation.id];
            const claimInfo = claimedDonations[donation.id];

            return (
              <div key={donation.id} className={`donation-card ${isClaimed ? 'claimed' : ''}`}>
                <h3>{donation.restaurantName}</h3>
                <div className="donation-details">
                  <p><strong>Available Items:</strong></p>
                  <ul>
                    {donation.foodItems && donation.foodItems.map((item, index) => (
                      <li key={index}>
                        {item.quantity} {item.unit} {item.name}
                      </li>
                    ))}
                  </ul>
                  <p><strong>Address:</strong> {donation.address}</p>
                  <p><strong>Pickup Time:</strong> {new Date(donation.pickupTime).toLocaleString()}</p>
                  {donation.description && (
                    <p><strong>Description:</strong> {donation.description}</p>
                  )}
                </div>
                
                {isClaimed ? (
                  <>
                    <span className="claimed-text">Claimed</span>
                    <div className="claim-info">
                      <p><strong>Claimed by:</strong> {claimInfo.name}</p>
                      <p><strong>Contact:</strong> {claimInfo.phone}</p>
                      <p><strong>Purpose:</strong> {claimInfo.purpose}</p>
                    </div>
                  </>
                ) : (
                  <button onClick={() => handleClaimClick(donation)}>
                    Claim Donation
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <p>No donations available at the moment.</p>
        )}
      </div>
      {showClaimForm && <ClaimFormPopup />}
    </div>
  );
};

export default FindFood;
