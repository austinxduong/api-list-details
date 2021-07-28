import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';

const EventList = ({ events }) => {
  const eventElements = events.map((event) => (
    <li key={event.text}>
      <Event {...event} />
    </li>
  ));

  return <ul>{eventElements}</ul>;
};

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default EventList;
