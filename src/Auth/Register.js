import React, { useState } from 'react';

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationError, setRegistrationError] =useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {fullName, email,password};
      const response = await fetch (`https://localhost:5130/Termek`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Hiba történt a regisztráció során.');
      }

      
    } catch (error) {
      setRegistrationError(error.message);
    }
  };
  return (
    <div>
      <h2>Regisztráció</h2>
      {registrationError && <p style={{ color: 'red' }}>{registrationError}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Teljes név" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        <input type="email" placeholder="E-mail cím" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Jelszó" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Regisztráció</button>
      </form>
    </div>
  );
}

export default Register;

