import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Community Website</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/events">Events</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/rewards">Rewards</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/faq">FAQ</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Account</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
