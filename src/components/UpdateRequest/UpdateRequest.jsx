import { useState } from 'react';
import './UpdateRequest.css';

const UpdateRequest = () => {
  const [form, setForm] = useState({
    category: '',
    currentValue: '',
    newValue: '',
    reason: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.category || !form.newValue || !form.reason) {
      alert('Please fill in all required fields');
      return;
    }

    // Submit logic here (e.g., POST to backend API)
    console.log('Update Request Submitted:', form);

    alert('Your request has been submitted!');
    setForm({ category: '', currentValue: '', newValue: '', reason: '' });
  };

  return (
    <div className="updateContainer">
      <h2>Request Update to Ration Card Details</h2>

      <form onSubmit={handleSubmit} className="updateForm">
        <label>Field to Update *</label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        >
          <option value="">-- Select --</option>
          <option value="Address">Address</option>
          <option value="Mobile Number">Mobile Number</option>
          <option value="Family Member Name">Family Member Name</option>
          <option value="Age">Age</option>
        </select>

        <label>Current Value</label>
        <input
          type="text"
          name="currentValue"
          placeholder="(Optional)"
          value={form.currentValue}
          onChange={handleChange}
        />

        <label>New Value *</label>
        <input
          type="text"
          name="newValue"
          placeholder="Enter updated information"
          value={form.newValue}
          onChange={handleChange}
          required
        />

        <label>Reason for Update *</label>
        <textarea
          name="reason"
          rows="4"
          placeholder="Explain the reason"
          value={form.reason}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default UpdateRequest;
