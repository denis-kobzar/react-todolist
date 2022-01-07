import {Component} from "react";
import TodoItem from "../TodoItem/TodoItem";

import './TodoList.css';

export default class TodoList extends Component {

  state = {
    msg: '',
    todos: [
      {
        id: '0',
        title: 'play games',
        done: false
      },
      {
        id: '1',
        title: 'draw pixel arts',
        done: false
      }
    ]
  }

  removeItem = (id) => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: newTodos
    });
  }

  updateData = (todo) => {
    const newTodos = this.state.todos.map(item => item.id === todo.id
      ? todo
      : item);
    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div className="todo-list">
        <ul className="todo-list__list">
          {
            this.state.todos.map((todo) => {
              return (
                <li
                  className="todo-list__li"
                  key={todo.id}>
                  <TodoItem
                    className="todo-list__item"
                    id={todo.id}
                    title={todo.title}
                    done={todo.done}
                    removeItem={this.removeItem.bind(this, todo.id)}
                    updateData={this.updateData}/>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
