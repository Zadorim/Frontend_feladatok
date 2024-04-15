import React from "react";


function Welcome() {

    return (
      <div>
        <h2>Köszönjük, hogy csatlakoztál!</h2>
        <p>Sikeresen bejelentkeztél vagy regisztráltál az oldalra.</p>
        <p>Folytatáshoz válassz az alábbi lehetőségek közül:</p>
        <ul>
          <li><a href="http://localhost:5130/Termek">Termékek keresése</a></li>
          <li>Profil szerkesztése</li>
          <li>Kijelentkezés</li>
        </ul>
      </div>
    )
  };

export default Welcome;