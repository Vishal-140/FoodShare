import React, { useState, useEffect } from 'react';
import { database } from '../auth/firebase';
import { ref, push, set, onValue, off, update } from 'firebase/database';
import ClaimFormPopup from './ClaimFormPopup';
import Mail from './Mail';
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

  const [emailData, setEmailData] = useState(null); // State to store email data

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClaimFormData((prevState) => ({
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

        donationsList.sort((a, b) => (claimedDonations[a.id] ? 1 : -1));
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
  }, [claimedDonations]);

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

      setClaimedDonations((prev) => ({
        ...prev,
        [selectedDonation.id]: claimFormData
      }));

      const donationRef = ref(database, `donations/${selectedDonation.id}`);
      await update(donationRef, { claimed: true });

      alert('Thank you for your claim! The restaurant will be notified, and an email has been sent to the restaurant owner.');

      // Prepare email data and trigger Mail.js
      setEmailData({
        restaurantEmail: selectedDonation.restaurantEmail,
        restaurantName: selectedDonation.restaurantName,
        ...claimFormData
      });

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
    } catch (error) {
      console.error('Error submitting claim:', error);
      alert('Failed to submit claim. Please try again.');
    }
  };

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
                    {donation.foodItems?.map((item, index) => (
                      <li key={index}>
                        {item.quantity} {item.unit} {item.name}
                      </li>
                    ))}
                  </ul>
                  <p><strong>Address:</strong> {donation.address}</p>
                  <p><strong>Pickup Time:</strong> {new Date(donation.pickupTime).toLocaleString()}</p>
                  {donation.description && <p><strong>Description:</strong> {donation.description}</p>}
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
                  <button onClick={() => handleClaimClick(donation)}>Claim Food Donation</button>
                )}
              </div>
            );
          })
        ) : (
          <p>No donations available at the moment.</p>
        )}
      </div>
      {showClaimForm && (
        <ClaimFormPopup
          claimFormData={claimFormData}
          handleInputChange={handleInputChange}
          handleClaimSubmit={handleClaimSubmit}
          setShowClaimForm={setShowClaimForm}
          setClaimFormData={setClaimFormData}
          selectedDonation={selectedDonation}
        />
      )}
      {emailData && <Mail emailData={emailData} />}
    </div>
  );
};

export default FindFood;
