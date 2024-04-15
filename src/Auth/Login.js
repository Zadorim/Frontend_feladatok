import React, { useState } from 'react';


function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {      
      if (!userName|| !password) {
        throw new Error('Kérlek, add meg mindkét mezőt!');
      }      
      const response = await fetch('http://localhost:5130/Termek', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName, password }),
      });
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Hiba történt a bejelentkezés során.');
      }      
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <div>
      <h2>Bejelentkezés</h2>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      <form onSubmit={handleSubmit}>
        <input type="userName" placeholder="Felhasználó név" value={userName} onChange={(e) => setUserName(e.target.value)} required />
        <input type="password" placeholder="Jelszó" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Bejelentkezés</button>
      </form>
    </div>
  );
}

export default Login;