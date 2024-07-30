// src/components/SearchResults.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { events } from '../data/events';

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('eventWhat').toLowerCase();

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container my-5">
      <h2 className="text-center">Results Found Based On Your Search Criteria</h2>
      <div className="mt-4">
        {filteredEvents.length > 0 ? (
          <ul className="list-group">
            {filteredEvents.map(event => (
              <li className="list-group-item" key={event.id}>
                <span className="badge bg-light text-success shadow fst-italic mb-1">EVENT</span>
                <h5 className="mb-1">
                  <a href={`/booking/${event.id}`} className="text-dark text-decoration-none">{event.name}</a>
                </h5>
                <p className="mb-1">By: {event.organizer}</p>
                <p className="mb-1">Location: {event.location}, Date: {event.date}, Time: {event.time}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No events found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
