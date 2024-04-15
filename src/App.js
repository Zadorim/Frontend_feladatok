import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { TermekListPage } from "./Termekek/TermekListPage";
import { TermekSinglePage } from "./Termekek/TermekSinglePage";
import { TermekCreatePage } from "./Termekek/TermekCreatePage";
import { TermekModPage } from "./Termekek/TermekModPage";
import { TermekDelPage } from "./Termekek/TermekDelPage";
import {Login}   from "./Auth/Login";
import {Register} from "./Auth/Register";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Termékek keresése</span>
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to={'/uj-termek'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Új termék</span>
              </NavLink>
              </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<TermekListPage />} />
        <Route path="/termek/:termekId" exact element={<TermekSinglePage />} />
        <Route path="/uj-termek" exact element={<TermekCreatePage />} />
        <Route path="/mod-termek/:termekId" exact element={<TermekModPage />} />
        <Route path="/del-termek/:termekId" exact element={<TermekDelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
