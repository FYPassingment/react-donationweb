import React from 'react';

const BookingSuccess = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h1 style={{ textShadow: 'none', fontSize: '55px' }}>Congratulations!</h1>
          <p>Registration was successful.</p>
        </div>
        <div className="col-md-4">
          <img src="/images/congratulation.png" alt="congratulation" className="img-fluid mt-3" />
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
