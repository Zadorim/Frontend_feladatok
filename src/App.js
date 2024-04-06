import React, {BrowserRouter as Router, NavLink, Route, Routes} from "react";
import { ItalListPage } from "./ItalListPage";
import { ItalSinglePage } from "./ItalSinglePage";
import { ItalCreatePage } from "./ItalCreatePage";
import { ItalModPage } from "./ItalModPage";
import { ItalDelPage } from "./ItalDelPage";
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
                <span className="nav-link">Ital választó</span>
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to={'/uj-pizza'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Új ital</span>
              </NavLink>
              </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<ItalListPage />} />
        <Route path="/ital/:italmId" exact element={<ItalSinglePage />} />
        <Route path="/uj-ital" exact element={<ItalCreatePage />} />
        <Route path="/mod-ital/:italId" exact element={<ItalModPage />} />
        <Route path="/del-ital/:italId" exact element={<ItalDelPage />} />
      </Routes>
    </Router>
  );
}

export default App;
