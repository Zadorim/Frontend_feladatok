import React, {BrowserRouter as Router, NavLink, Route, Routes} from "react";
import { TermekListPage } from "./TermekListPage";
import { TermekSinglePage } from "./TermekSinglePage";
import { TermekCreatePage } from "./TermekCreatePage";
import { TermekModPage } from "./TermekModPage";
import { TermekDelPage } from "./TermekDelPage";
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
              <NavLink to={'/uj-ital'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Új termék</span>
              </NavLink>
              </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<TermekListPage />} />
        <Route path="/ital/:italmId" exact element={<TermekSinglePage />} />
        <Route path="/uj-ital" exact element={<TermekCreatePage />} />
        <Route path="/mod-ital/:italId" exact element={<TermekModPage />} />
        <Route path="/del-ital/:italId" exact element={<TermekDelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
