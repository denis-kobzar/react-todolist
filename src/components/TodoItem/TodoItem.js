import {Component} from "react";
import {Alert, Button, Form, FormGroup, Input, Label} from 'reactstrap';
import { BsFillPencilFill } from "react-icons/bs";

import './TodoItem.css';

export default class TodoItem extends Component {

  state = {
    editMode: false,
    editValue: '',
    done: this.props.done
  }

  setEditMode = (value) => {
    this.setState({
      editMode: value
    })
  }

  saveTitle = () => {
    if (this.state.editValue.trim().length > 0) {
      const newTodo = {
        id: this.props.id,
        title: this.state.editValue,
        done: this.state.done
      }
      this.props.updateData(newTodo);
      this.setEditMode(false);
    }
  }

  inputTitleHandler = (event) => {
    this.state.editValue = event.target.value;
  }

  render() {
    if (this.state.editMode) {
      return (
        <div className="todo-item">
          <Alert
            className="todo-item__alert_edit"
            color="info"
            toggle={this.props.removeItem}
          >
            <Form>
              <FormGroup>
                <Label for="taskTitle">
                  Task title
                </Label>
                <Input
                  id="taskTitle"
                  defaultValue={this.props.title}
                  onChange={this.inputTitleHandler}
                />
              </FormGroup>
            </Form>
            <div className="todo-item__buttons">
              <Button
                color="primary"
                outline
                onClick={this.setEditMode.bind(this, false)}
              >
                Cancel
              </Button>
              <Button
                color="primary"
                onClick={this.saveTitle}
              >
                Save
              </Button>
            </div>
          </Alert>
        </div>
      )
    }
    else {
      return (
        <div className="todo-item">
          <Alert
            className="todo-item__alert"
            color="info"
            toggle={this.props.removeItem}
          >
            { this.props.title }
            <BsFillPencilFill
              className="edit-button"
              onClick={this.setEditMode.bind(this, true)}/>
          </Alert>
        </div>
      )
    }
  }
}
