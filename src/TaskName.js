import React from 'react';
import PropTypes from 'prop-types';

const TaskName = props => {
	if (props.isEditing) {
		return (
			<input 
				type="text"
				value={props.children}
				onChange={props.handleTaskNameChange}
			/>
		);
	}

	return (
		<span>
			{props.children}
		</span>
	);
}

TaskName.propTypes = {
	handleTaskNameChange: PropTypes.func.isRequired,
	isEditing: PropTypes.bool.isRequired
};

export default TaskName;