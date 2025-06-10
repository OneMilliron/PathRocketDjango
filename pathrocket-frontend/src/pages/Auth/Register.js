import { useState } from 'react';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await axios.post('/users/register/', formData);
      setSuccess(res.data.message || 'Registered successfully!');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError('Registration failed. ' + (err.response?.data?.email || 'Try again.'));
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        /><br />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
