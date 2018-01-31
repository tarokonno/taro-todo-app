import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterTasks extends Component {
	state = {
		isActive: false
	}

	render() {

		return (
			<div>
				{this.props.tasks.map(task => {
					return task.category
				}
				)}
			</div>
		);
	}
}


export default FilterTasks;