import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CheckupRequestForm = () => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('description', description);
    formData.append('image', image);

    axios.post('/api/checkups', formData)
      .then(() => {
        alert('Checkup requested successfully');
        navigate('/results');
      })
      .catch((err) => {
        console.error('Error requesting checkup:', err);
        alert('Error submitting checkup request.');
      });
  };

  return (
    <div className="checkup-form-container">
      <h1>Request a Dental Checkup</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Describe your symptoms"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default CheckupRequestForm;
