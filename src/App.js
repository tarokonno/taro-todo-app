import React, { Component } from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Counter from './Counter';
import TaskList from './TaskList';

class App extends Component {

  state = {
    categoryFilter: '',
    isFiltered: false,
    pendingTask: '',
    pendingCategory: '',
    tasks: [
      {
        name: 'Make to-do app',
        category: 'React',
        isComplete: false,
        isEditing: false
      },
      {
        name: 'Make to-do app',
        category: 'React',
        isComplete: true,
        isEditing: false
      },
      {
        name: 'Book flights',
        category: 'Admin',
        isComplete: true,
        isEditing: false
      },
      {
        name: 'Cancel Gym Membership',
        category: 'Admin',
        isComplete: false,
        isEditing: false
      }
    ]
  };

  toggleFilter = () => {
    this.setState({ isFiltered: !this.state.isFiltered });
  }

  handleTaskInput = (e) => {
    this.setState({ pendingTask: e.target.value });
  }

  handleCategoryInput = (e) => {
    this.setState({ pendingCategory: e.target.value });
  }

  setCategoryFilter = value => {
    this.setState({ categoryFilter: value });
  }

  handleNewTaskSubmit = (e) => {
    e.preventDefault();
    const name = this.state.pendingTask;
    const category = this.state.pendingCategory;

    if(name && category) {
      this.setState({
        tasks: [
          {
            name: this.state.pendingTask,
            category: this.state.pendingCategory,
            isComplete: false,
            isEditing: false
          },
          ...this.state.tasks
        ],
        pendingTask: '',
        pendingCategory: ''
      })
    }
  }

  removeTaskAt = index => {
    this.setState({
      tasks: [
        ...this.state.tasks.slice(0, index),
        ...this.state.tasks.slice(index + 1)
      ]
    })
  }

  toggleTaskPropertyAt = (property, indexToChange) =>
    this.setState({
      tasks: this.state.tasks.map((task,index) => {
        if (index === indexToChange) {
          return {
            ...task,
            [property]: !task[property]
          };
        }
        return task;
      })
    })

  toggleCompletionAt = index =>
    this.toggleTaskPropertyAt("isComplete", index);

  toggleEditingAt = index =>
    this.toggleTaskPropertyAt("isEditing", index);

  setTaskNameAt = (name, indexToChange) =>
    this.setState({
      tasks: this.state.tasks.map((task,index) => {
        if (index === indexToChange) {
          return {
            ...task,
            name
          }
        }
        return task;
      })
    })

  setCategoryNameAt = (category, indexToChange) =>
    this.setState({
      tasks: this.state.tasks.map((task,index) => {
        if (index === indexToChange) {
          return {
            ...task,
            category
          }
        }
        return task;
      })
    })

  // COUNTER FUNCTIONS

  getAllTasks = () => this.state.tasks.length;

  getCompleteTasks = () => 
    this.state.tasks.reduce((total, task) => task.isComplete ? total + 1 : total,
    0
  );

  render() {
    const allTasks = this.getAllTasks();
    const totalCompleteTasks = this.getCompleteTasks();
    const totalIncompleteTasks = allTasks - totalCompleteTasks;
    let displayTasks;

    if(this.state.tasks.length) {
      displayTasks = (
        <TaskList
        categoryFilter={this.state.categoryFilter}
        isFiltered={this.state.isFiltered}
        setTaskNameAt={this.setTaskNameAt}
        setCategoryNameAt={this.setCategoryNameAt}
        removeTaskAt={this.removeTaskAt}
        tasks={this.state.tasks}
        toggleCompletionAt={this.toggleCompletionAt}
        toggleEditingAt={this.toggleEditingAt}
      />
      );
      
    } else {
      displayTasks = (
        
        <div className="empty-message">
          <ReactCSSTransitionGroup transitionName="example"
            transitionAppear={true}
            transitionLeave={true}
            transitionEnterTimeout={500}
            transitionAppearTimeout={500}
            transitionLeaveTimeout={300}>
            <h2>Add some tasks and get moving!</h2>
          </ReactCSSTransitionGroup>
        </div>
      );
    }

    return (
      <div className="App">
      <header>
        <h1>To-Done List</h1>
        <p>Because, what the world needs is yet another to-do app...</p>
        <form onSubmit={this.handleNewTaskSubmit}>
          <input
            type="text"
            onChange={this.handleTaskInput}
            value={this.state.pendingTask}
            placeholder="Add a task"
          />
          <input
            type="text"
            onChange={this.handleCategoryInput}
            value={this.state.pendingCategory}
            placeholder="Category"
          />
          <button type="submit" name="submit" value="submit">
            Submit
          </button>
      </form>
      </header>
      <div className="main">
        <div>
          <h2>Tasks to do</h2>
          <label>
            <input 
              type="checkbox"
              onChange={this.toggleFilter}
              checked={this.state.isFiltered}
            />
            Show incomplete tasks only
          </label>
          <select onChange={e => this.setCategoryFilter(e.target.value)}>
            {
              Array.from(new Set(this.state.tasks.map(item => item.category))) // MAP CATEGORIES AND REMOVE DUPLICATES
              .map(item => <option value={item}>{item}</option>)
            }
            <option value="" selected>All</option>
          </select>
        </div>
        
        <Counter 
          allTasks={allTasks}
          totalCompleteTasks={totalCompleteTasks}
          totalIncompleteTasks={totalIncompleteTasks}
        />

        { displayTasks }
        
      </div>

    </div>
    );
  }
}

export default App;
