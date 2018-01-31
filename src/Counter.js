import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => 
	<table className="counter">
    <tbody>
      <tr>
        <td>Complete:</td>
        <td>{props.totalCompleteTasks}</td>
      </tr>
      <tr>
        <td>Incomplete:</td>
        <td>{props.totalIncompleteTasks}</td>
      </tr>
      <tr>
        <td>Total:</td>
        <td>{props.allTasks}</td>
      </tr>
    </tbody>
  </table>

  Counter.propTypes = {
  	totalCompleteTasks: PropTypes.number,
  	totalIncompleteTasks: PropTypes.number,
  	allTasks: PropTypes.number,
  }

export default Counter;