import React from 'react';


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div class="container">
          <div className="navbar-header">
            <a className="navbar-brand text-white text-lg brand-text" to="/">
              MovieWorld
            </a>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
            <a href="#"><i className="fas fa-tv"></i></a> 
            </li>
            </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
