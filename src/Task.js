import React from 'react';
import PropTypes from 'prop-types';
import TaskName from './TaskName';
import CategoryName from './CategoryName';

const Task = props =>
	<li>
		<TaskName 
      isEditing={props.isEditing}
      handleTaskNameChange={e => props.setTaskName(e.target.value)}
    >
			{props.name}
		</TaskName>
    { props.category &&
      <CategoryName 
        className="category" 
        isEditing={props.isEditing}
        handleCategoryNameChange={e => props.setCategoryName(e.target.value)}>
        {props.category}
      </CategoryName>
    }
    <label>
      <input
      	type="checkbox"
      	checked={props.isComplete}
      	onChange={props.handleCompletion}
      />
      {props.isComplete ? "Done!" : "To-do"}
    </label>
    <button 
      onClick={props.handleToggleEditing}>
      {props.isEditing ? "save" : "edit"}
    </button>
    <button onClick={props.handleRemoveTask}>
      remove
    </button>
  </li>

Task.propTypes = {
	name: PropTypes.string.isRequired,
	isComplete: PropTypes.bool.isRequired,
	isEditing: PropTypes.bool.isRequired,
	handleCompletion: PropTypes.func.isRequired,
  handleRemoveTask: PropTypes.func.isRequired,
	handleToggleEditing: PropTypes.func.isRequired,
  setTaskName: PropTypes.func.isRequired,
  setCategoryName: PropTypes.func.isRequired
}

export default Task;