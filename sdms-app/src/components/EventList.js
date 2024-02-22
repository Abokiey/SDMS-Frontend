import React, { useState, useEffect } from 'react';
import customFetcher from '../utils/fetchInstance';
import { Link } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    customFetcher('http://localhost:5000/api/v1/events')
      .then(({ data }) => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div>
      <h2>Event List</h2>

      <div>
          {events && events?.map(event => (
            <div key={event.id} className='p-4 border border-solid m-4'>
                <Link to={`/tournament/eventplayers`} state={{ event_id: event.id }}>
                    <div>{event.name}</div>
                    <div>{event.created_at}</div>
                </Link>
            </div>
          ))}
        </div>
    </div>
  );
};

export default EventList;
