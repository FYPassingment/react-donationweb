// src/components/FAQ.jsx
import React from 'react';

const FAQ = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mt-md-5 pe-5">
          <h1>Have a question or need help?</h1>
          <br />
          <h1>Get in touch with a member of your local committee.</h1>
          <br />
          <div className="mt-4">
            <form action="/faq" method="GET">
              <div className="input-group mb-3 pe-5">
                <input type="text" className="form-control" placeholder="Enter location..." aria-label="Enter location" aria-describedby="location-search-button" />
                <button className="btn btn-outline-secondary" type="submit" id="location-search-button"><i className="bi bi-search"></i></button>
              </div>
            </form>
          </div>
          <div className="mt-4">
            <br />
            <h3>Contact Details</h3>
            <h5>Choose your location to find out the contact details of your local committee.</h5>
          </div>
        </div>
        <div className="col-md-6">
          <img src="/images/qna-bg.png" className="img-fluid rounded" alt="QNA Background" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
