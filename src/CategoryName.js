import React from 'react';
import PropTypes from 'prop-types';

const CategoryName = props => {
	if (props.isEditing) {
		return (
			<input 
				type="text"
				value={props.children}
				onChange={props.handleCategoryNameChange}
			/>
		);
	}

	return (
		<span className="category">
			{props.children}
		</span>
	);
}

CategoryName.propTypes = {
	handleCategoryNameChange: PropTypes.func.isRequired,
	isEditing: PropTypes.bool.isRequired
};

export default CategoryName;