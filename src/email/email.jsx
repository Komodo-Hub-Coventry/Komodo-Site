import './email.css';

import React, { useState } from 'react';

import emailjs from 'emailjs-com'; // Import EmailJS library connected to pala.sinem1995@gmail.com   

const StudentEmailForm = () => {
  const [emailDetails, updateForm] = useState({ to: '', subject: '', message: '' });
  const [responseMessage, updateMessage] = useState('');
  const [sending, updateSending] = useState(false);

  const handleChange = (e) => {
    updateForm({ ...emailDetails, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    updateSending(true);
    updateMessage('');

const templateParams = {
  to_email: emailDetails.to,  
  name: emailDetails.name,    
  time: new Date().toLocaleString(),  
  message: emailDetails.message,
};

    try {
      await emailjs.send('service_rdh3f5q', 'template_hot8wrl', templateParams, 'B-27KBAtn_7jKd0Aw');
      updateMessage('Email sent successfully!');
      updateForm({ to: '', subject: '', message: '' });
    } catch (error) {
      updateMessage('Failed to send email. Please try again.');
    } finally {
      updateSending(false);
    }
  };

  return (
    <div className="page-wrapper">
  <h1 className="dashboard-title">Contact Users</h1>
    <div className="student-email-form-container">
      <h2>Send an Email</h2>
      {responseMessage && <p className={responseMessage.includes('successfully') ? 'success' : 'error'}>{responseMessage}</p>}
      <form onSubmit={sendEmail} className="student-email-form">
        <label>Email Address</label>
        <input
          type="email"
          name="to"
          placeholder="Recipient's Email"
          value={emailDetails.to}
          onChange={handleChange}
          required
        />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={emailDetails.subject}
          onChange={handleChange}
          required
        />
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Write your message here..."
          value={emailDetails.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={sending}>
          {sending ? 'Sending...' : 'Send Email'}
        </button>
      </form>
    </div>
     </div>
  );
};

export default StudentEmailForm;
