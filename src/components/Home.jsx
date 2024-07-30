// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="content text-center text-white">
          <h1>Hello</h1>
          <h1>Welcome to our Community Website</h1>
          <h1>Where you can join events & meet new faces!</h1>
          <a href="#" className="btn btn-light mt-5">Learn More</a>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center">Upcoming Events & Facilities</h2>
        <div className="row mt-4">
          <div className="col-md-4 mt-3">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Event</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="card-text"><small className="text-muted">06 Feb 2024</small></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Facility</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="card-text"><small className="text-muted">06 Feb 2024</small></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Event</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="card-text"><small className="text-muted">06 Feb 2024</small></p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="#" className="btn btn-secondary btn-light shadow">More events</a>
        </div>
      </div>

      <div className="additional-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4">
              <div className="card bg-white border-0 text-start" style={{ height: '250px', width: 'auto' }}>
                <div className="card-body">
                  <h5 className="card-title">Be Your Neighborhood Champion</h5>
                  <h4 className="card-title">Lorem Lorem</h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut felis sit amet magna elementum imperdiet id sit amet mi. Donec consequat sagittis nisl venenatis faucibus.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img src="/images/image-placeholder.png" alt="Description" className="img-fluid" style={{ width: 'auto', height: '250px' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="additional-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4">
              <img src="/images/image-placeholder.png" alt="Description" className="img-fluid" style={{ width: 'auto', height: '250px' }} />
            </div>
            <div className="col-md-4">
              <div className="card bg-white border-0 text-start" style={{ height: '250px', width: 'auto' }}>
                <div className="card-body">
                  <h5 className="card-title">Be Your Neighborhood Champion</h5>
                  <h4 className="card-title">Lorem Lorem</h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut felis sit amet magna elementum imperdiet id sit amet mi. Donec consequat sagittis nisl venenatis faucibus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
