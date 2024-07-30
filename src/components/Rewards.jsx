// src/components/Rewards.jsx
import React from 'react';

const Rewards = () => {
  return (
    <div className="container my-5">
      <div className="hero-section" style={{ backgroundImage: `url('/images/bg-rewards.png')`, height: '500px' }}>
        <div className="overlay"></div>
        <div className="content text-center text-white">
          <h1 style={{ fontSize: '64px' }}>Rewards</h1>
          <h1>Create an account to earn points and claim exciting rewards!</h1>
          <a href="/register" className="btn bg-white text-dark border-0 btn-primary mt-4">Sign Up Now</a>
        </div>
      </div>

      <div className="container my-5 text-center">
        <div className="d-flex justify-content-around align-items-center mt-4">
          <div className="text-start">
            <h2>Partnered with </h2>
            <h5>and more ....</h5>
          </div>
          <img src="/images/partner-fairprice.png" alt="FairPrice" className="partner-logo" />
          <img src="/images/partner-mcdonalds.png" alt="McDonald's" className="partner-logo" />
          <img src="/images/partner-singapore-zoo.png" alt="Singapore Zoo" className="partner-logo" />
          <img src="/images/partner-cold-storage.png" alt="Cold Storage" className="partner-logo" />
          <img src="/images/partner-luge.png" alt="Luge" className="partner-logo" />
        </div>
      </div>

      <div className="how-it-works-section" style={{ backgroundImage: `url('/images/how-it-works-bg.png')` }}>
        <div className="container text-center py-5">
          <h1 className="text-white">How it works</h1>
          <div className="row mt-4">
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div style={{ height: '100%', width: '60%', borderRadius: '50px' }} className="card bg-success text-white text-center p-4">
                <h1 className="fw-bolder">1</h1>
                <h4>Earn points by participating / volunteering at events</h4>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div style={{ height: '100%', width: '60%', borderRadius: '50px' }} className="card bg-success text-white text-center p-4">
                <h1 className="fw-bolder">2</h1>
                <h4>Collect sufficient points and redeem rewards of your choice</h4>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div style={{ height: '100%', width: '60%', borderRadius: '50px' }} className="card bg-success text-white text-center p-4">
                <h1 className="fw-bolder">3</h1>
                <h4>Use your rewards!</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
