import React from 'react';
import { useParams } from 'react-router-dom';
import { events } from '../data/events';

const EventDetail = () => {
  const { id } = useParams();
  const event = events.find(e => e.id.toString() === id);

  if (!event) {
    return <h2>Event not found</h2>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <p>Location: {event.location}</p>
        </div>
        <div className="col-md-4">
          <img src={event.image} alt={event.name} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
