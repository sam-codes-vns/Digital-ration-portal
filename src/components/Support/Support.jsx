import { useState } from 'react';
import './Support.css';

const Support = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    issue: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.issue || !form.message) {
      alert('Please fill in all fields');
      return;
    }

    // Send data to backend or API (placeholder)
    console.log('Support Request:', form);
    alert('Your support request has been submitted!');
    setForm({ name: '', email: '', issue: '', message: '' });
  };

  return (
    <div className="supportContainer">
      <h2>Contact Support</h2>
      <form onSubmit={handleSubmit} className="supportForm">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <select
          name="issue"
          value={form.issue}
          onChange={handleChange}
          required
        >
          <option value="">Select Issue Type</option>
          <option value="Login Issue">Login Issue</option>
          <option value="Ration Card Info">Ration Card Info</option>
          <option value="Allotment/Delivery Issue">Allotment/Delivery Issue</option>
          <option value="Technical Bug">Technical Bug</option>
          <option value="Other">Other</option>
        </select>

        <textarea
          name="message"
          rows="5"
          placeholder="Describe your issue..."
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default Support;
