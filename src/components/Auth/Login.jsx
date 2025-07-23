import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // ✅ Added
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth(); // ✅ Added
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder auth logic
    if (form.email && form.password) {
      console.log('Login successful:', form);
      setIsLoggedIn(true); // ✅ Login happens here
      navigate('/dashboard');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="authContainer">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="authForm">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
        <p>
          Don’t have an account?{' '}
          <span className="link" onClick={() => navigate('/register')}>
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
