import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from '../auth/firebase';
import { ref, push, set } from 'firebase/database';
import './DonateFood.css';

const DonateFood = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    restaurantName: '',
    foodItems: [{ name: '', quantity: '', unit: 'kg' }],
    address: '',
    pickupTime: '',
    pickupEndTime: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFoodItemChange = (index, field, value) => {
    const newFoodItems = [...formData.foodItems];
    newFoodItems[index][field] = value;
    setFormData(prev => ({
      ...prev,
      foodItems: newFoodItems
    }));
  };

  const addFoodItem = () => {
    setFormData(prev => ({
      ...prev,
      foodItems: [...prev.foodItems, { name: '', quantity: '', unit: 'kg' }]
    }));
  };

  const removeFoodItem = (index) => {
    setFormData(prev => ({
      ...prev,
      foodItems: prev.foodItems.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Create a reference to the 'donations' node
      const donationsRef = ref(database, 'donations');
      
      // Generate a new unique key for this donation
      const newDonationRef = push(donationsRef);

      // Create the donation data object
      const donationData = {
        ...formData,
        createdAt: new Date().toISOString(),
        claimed: false,
        status: 'active'
      };

      // Save to Firebase
      await set(newDonationRef, donationData);

      alert('Donation posted successfully!');
      navigate('/find-food');

    } catch (error) {
      console.error('Error posting donation:', error);
      alert('Error posting donation. Please try again.');
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content-wrapper">
        <div className="container">
          <h1 className="title">Donate Food</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="formGroup">
              <label className="label">Restaurant Name</label>
              <input type="text" name="restaurantName" value={formData.restaurantName} onChange={handleInputChange} className="input" required />
            </div>

            <div className="foodItemsContainer">
              <label className="label">Food Items</label>
              {formData.foodItems.map((item, index) => (
                <div key={index} className="foodItem">
                  <input type="text" placeholder="Food item name" value={item.name} onChange={(e) => handleFoodItemChange(index, 'name', e.target.value)} className="input" required />
                  <input type="number" placeholder="Quantity" value={item.quantity} onChange={(e) => handleFoodItemChange(index, 'quantity', e.target.value)} className="input" required />
                  <select value={item.unit} onChange={(e) => handleFoodItemChange(index, 'unit', e.target.value)} className="input">
                    <option value="kg">kg</option>
                    <option value="items">items</option>
                    <option value="servings">servings</option>
                  </select>
                  {index > 0 && (
                    <button type="button" onClick={() => removeFoodItem(index)} className="removeButton">✕</button>
                  )}
                </div>
              ))}
              <button type="button" onClick={addFoodItem} className="addButton">+ Add Food Item</button>
            </div>

            <div className="formGroup">
              <label className="label">Restaurant Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="input" required />
            </div>

            <div className="formGroup">
              <label className="label">Pickup Time Window</label>
              <div className="timeContainer">
                <input type="datetime-local" name="pickupTime" value={formData.pickupTime} onChange={handleInputChange} className="input" required />
                <input type="datetime-local" name="pickupEndTime" value={formData.pickupEndTime} onChange={handleInputChange} className="input" required />
              </div>
            </div>

            <div className="formGroup">
              <label className="label">Additional Description</label>
              <textarea name="description" value={formData.description} onChange={handleInputChange} className="input description" />
            </div>

            <button type="submit" className="button">Submit Donation</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonateFood;