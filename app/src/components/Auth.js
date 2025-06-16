import React, { useState } from 'react';

const Auth = () => {
  // State variables for inputs
  const [collegeName, setCollegeName] = useState('');
  const [collegeYear, setCollegeYear] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!collegeName || !collegeYear || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Save to localStorage
    localStorage.setItem('collegeName', collegeName);
    localStorage.setItem('collegeYear', collegeYear);
    localStorage.setItem('email', email);

    alert('Information saved!');

    // Clear fields
    setCollegeName('');
    setCollegeYear('');
    setEmail('');
    setPassword('');
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Login / Sign Up</h2>

        <input
          type="text"
          placeholder="College Name"
          value={collegeName}
          onChange={(e) => setCollegeName(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="number"
          placeholder="College Year"
          value={collegeYear}
          onChange={(e) => setCollegeYear(e.target.value)}
          min="1"
          max="8"
          style={styles.input}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#FFFBFE',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  form: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: 12,
    boxShadow: '0 4px 12px rgba(103, 80, 164, 0.2)',
    maxWidth: 400,
    width: '100%',
    boxSizing: 'border-box',
  },
  title: {
    color: '#6750A4',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderRadius: 6,
    border: '1px solid #ccc',
    fontSize: 16,
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: 12,
    backgroundColor: '#6750A4',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    fontSize: 16,
    cursor: 'pointer',
  },
};

export default Auth;
