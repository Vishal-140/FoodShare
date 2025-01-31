import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Mail = ({ emailData }) => {
  useEffect(() => {
    if (emailData) {
      sendEmail();
    }
  }, [emailData]); // Send email when emailData updates

  const sendEmail = () => {
    emailjs
      .send(
        'service_czm0eoq',
        'template_dobznhu',
        {
          to_email: emailData.restaurantEmail,
          from_name: emailData.name,
          from_email: emailData.email,
          message: `A new food claim has been made.\n\n
            Claimant: ${emailData.name}\n
            Organization: ${emailData.organization}\n
            Phone: ${emailData.phone}\n
            Purpose: ${emailData.purpose}\n
            Number of People: ${emailData.numberOfPeople}\n
            \nPlease contact the claimant for further details.`
        },
        'XGK_4c2714CJnBXU3'
      )
      .then(() => {
        console.log('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  return null; // No UI needed for email sending
};

export default Mail;
