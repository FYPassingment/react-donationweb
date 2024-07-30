import React from 'react';
import { useNavigate } from 'react-router-dom';
import { events } from '../data/events';

const Booking = () => {
  const { id } = useParams();
  const history = useNavigate();
  const event = events.find(e => e.id.toString() === id);

  if (!event) {
    return <h2>Event not found</h2>;
  }

  const handleBooking = () => {
    // Simulate a booking process
    if (event.id % 2 === 0) {
      history.push('/booking-success');
    } else {
      history.push('/booking-failed');
    }
  };

  return (
    <div className="container my-5 border">
      <div className="row my-5">
        <div className="col-md-8">
          <div className="card border-0">
            <div className="card-body">
              <h2 className="card-title fw-bold">{event.name}</h2>
              <h4 className="card-title fw-bold">Event Description</h4>
              <p className="card-text fw-light">{event.description}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-md-0 mt-4">
          <div className="card border-0 rounded shadow">
            <div className="card-body p-4 shadow">
              <h3 className="card-title">Date and Time</h3>
              <p className="mb-0">{event.date}</p>
              <p>{event.time}</p>
              <h3 className="card-title">Venue</h3>
              <p>{event.location}</p>
              <button onClick={handleBooking} className="btn btn-danger mt-2" style={{ width: '100%' }}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
