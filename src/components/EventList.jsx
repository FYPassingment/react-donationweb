import React from 'react';
import { Link } from 'react-router-dom';
import { events } from '../data/events';

const EventList = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">Explore Events</h2>
      <div className="row mt-4">
        {events.map(event => (
          <div className="col-md-4 mb-4" key={event.id}>
            <div className="card shadow">
              <img src={event.image} className="card-img-top" alt={event.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text">{event.description}</p>
                <Link to={`/events/${event.id}`} className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
