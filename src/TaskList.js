import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = props =>
	<ul>
    {props.tasks
    	.filter(task => !props.isFiltered || !task.isComplete)
      .filter(task => !props.categoryFilter || task.category === props.categoryFilter)
    	.map((task, index) =>
    	task.name && task.category &&
    	<Task 
    		key={index}
    		name={task.name} 
    		category={task.category}
    		isComplete={task.isComplete}
    		isEditing={task.isEditing}
    		handleCompletion={() => props.toggleCompletionAt(index)}
    		handleRemoveTask={() => props.removeTaskAt(index)}
    		handleToggleEditing={() => props.toggleEditingAt(index)}
    		setTaskName={text => props.setTaskNameAt(text, index)}
    		setCategoryName={text => props.setCategoryNameAt(text, index)}
    	/>
    )}
  </ul>

TaskList.propTypes = {
	isFiltered: PropTypes.bool.isRequired,
	setTaskNameAt: PropTypes.func.isRequired,
	setCategoryNameAt: PropTypes.func.isRequired,
	tasks: PropTypes.array.isRequired,
	removeTaskAt: PropTypes.func.isRequired,
	toggleCompletionAt: PropTypes.func.isRequired,
	toggleEditingAt: PropTypes.func.isRequired
}

export default TaskList;