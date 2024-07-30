import React from 'react';

const BookingFailed = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h1 style={{ textShadow: 'none', fontSize: '55px' }}>Oh no!</h1>
          <p>Registration was unsuccessful due to lack of vacancy. Apologies for the inconvenience.</p>
        </div>
        <div className="col-md-4">
          <img src="/images/failed.png" alt="failed" className="img-fluid mt-3" />
        </div>
      </div>
    </div>
  );
};

export default BookingFailed;
