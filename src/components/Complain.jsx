// src/components/Complain.jsx
import React from 'react';

const Complain = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mt-md-5 pe-5">
          <h1>Is there something you want to inform us about?</h1>
          <br />
          <h2>(i.e. incidents, repairs, feedback, etc.)</h2>
          <br />
          <div className="mt-4">
            <form action="/faq" method="GET">
              <div className="mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input type="text" className="form-control" id="location" name="complaintlocation" placeholder="Enter Location" required />
              </div>
              <div className="mb-3">
                <label htmlFor="urgency" className="form-label">Urgency</label>
                <div className="input-group mb-3">
                  <select className="form-select" aria-label="complainturgency" id="urgency" name="complainturgency">
                    <option value="1">None (message, feedback, etc.)</option>
                    <option value="2">Low (people are not too affected)</option>
                    <option value="3">Medium (people are moderately affected)</option>
                    <option value="4">High (people are severely affected)</option>
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name="complaintdescription" placeholder="Enter details..." required />
              </div>
              <div className="d-grid mt-3">
                <button type="submit" className="btn btn-danger">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <img src="/images/qna-bg.png" className="img-fluid rounded" alt="QNA Background" />
        </div>
      </div>
    </div>
  );
};

export default Complain;
