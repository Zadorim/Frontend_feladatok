import { BrowserRouter as Router, NavLink, Routes, Route} from "react-router-dom";
import { TermekListPage } from "./Termekek/TermekListPage";
import { TermekSinglePage } from "./Termekek/TermekSinglePage";
import { TermekCreatePage } from "./Termekek/TermekCreatePage";
import { TermekModPage } from "./Termekek/TermekModPage";
import { TermekDelPage } from "./Termekek/TermekDelPage";
import {Login} from "./Auth/Login";
import {Register} from "./Auth/Register";
import {Welcome} from "./Auth/Welcome"
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";


export function App() {
  return (    
    <Router>
      <NavLink className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <a class="navbar-brand" href="#"><i class="bi bi-cart4"> </i>DrinkIt</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">       
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Főoldal</span>
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Vásárlási feltételek</span>
              </NavLink>
              </li>
              <li className="nav-item dropdown"> 
              <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Kategóriák</span>
                <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Szeszes italok</a></li>
                    <li><a class="dropdown-item" href="#">Pálinka</a></li>
                    <li><a class="dropdown-item" href="#">Sör, cider</a></li>
                    <li><a class="dropdown-item" href="#">Borok és pezsgők</a></li>
                    <li><a class="dropdown-item" href="#">Különlegességek</a></li>
                    <li><a class="dropdown-item" href="#">Akciós termékek</a></li>
                  </ul>
              </NavLink>
              </li>
          </ul>
        </div>
      </div>
      </NavLink>
      <Routes>
        <Route path="/" exact element={<TermekListPage />} />
        <Route path="./Auth/login" exact element={<Login/>}/>
        <Route path="/Auth/register" exact component={<Register/>}/>
        <Route path="/Auth/welcome" exact component={<Welcome/>}/>
        <Route path="/termek/:termekId" exact element={<TermekSinglePage />} />
        <Route path="/uj-termek" exact element={<TermekCreatePage />} />
        <Route path="/mod-termek/:termekId" exact element={<TermekModPage />} />
        <Route path="/del-termek/:termekId" exact element={<TermekDelPage />} />       
      </Routes>
    </Router>   
  );
}

export default App;
