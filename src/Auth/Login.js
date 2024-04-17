import React, { useState } from 'react';
import {useHistory} from "react-router-dom";



function Login() {
  const [isLoginPending, setLoginPending] = useState(False);  
  const history = useHistory();
 

  function loginFormSubmit (e) {
    e.preventDefault();
    setLoginPending(true);
    Login(e.target.elements.userName.value, e.target.elements.password.value)
    .then(() => {
      setLoginPending(false);
      history.push("/Termekek/TermekListPage")
    })
    .catch((error) => {
      alert("Helytelen bejelentkezési adatok, kérjük próbáld újra! ");
    });
  } 

  if (isLoginPending) {
        return(
          <div className='center-item'>
            <div className='spinner-border text.danger'></div>
          </div>
        );
      }

  return (
    <div className='container-fluid d-flex justify-content-center h-100 login-container'>
      <div className='card login-card'>
        <div className='card-header login-card-header'>
        <h3>Bejelentkezés</h3>
        </div>
      <div className='card-body'>
        <form onSubmit={loginFormSubmit}>
          <div className='input-group form-group'>
            <input type='userName' name="felhasznalonev"  className='form-control' placeholder="Felhasználó név" />
            <input type="password" name='password' className='form-control' placeholder="Jelszó"/>
          </div>
          <div className='form-froup'>
            <button type="submit" className='btn foat-right btn-warning'>Bejelentkezés</button>
          </div>
        </form>
      </div>
    </div> 
    </div>     
      
   
  );  
}

export default Login;