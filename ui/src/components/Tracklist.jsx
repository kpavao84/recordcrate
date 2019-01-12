import React from 'react';
import PropTypes from 'prop-types';

const Tracklist = ({ tracks }) => (
  <div id="tracklist">
    <h3>Tracklist</h3>
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Length</th>
        </tr>
      </thead>
      <tbody>
        {tracks.map((track, i) => (
          <tr key={track.id}>
            <th scope="row">{i + 1}.</th>
            <td>{track.title}</td>
            <td>{track.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

Tracklist.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tracklist;