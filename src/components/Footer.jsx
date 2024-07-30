import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>People's Project</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Careers</a></li>
              <li><a href="#" className="text-white">Teams</a></li>
              <li><a href="#" className="text-white">FAQs</a></li>
              <li><a href="#" className="text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-6 text-end">
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#" className="text-white"><i className="bi bi-facebook"></i></a></li>
              <li className="list-inline-item"><a href="#" className="text-white"><i className="bi bi-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#" className="text-white"><i className="bi bi-linkedin"></i></a></li>
              <li className="list-inline-item"><a href="#" className="text-white"><i className="bi bi-pinterest"></i></a></li>
            </ul>
          </div>
          <div className="col text-center mt-5">
            <p>&copy; 2021 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
