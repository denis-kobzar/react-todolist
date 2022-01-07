import './App.css';
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <p className="h2">React Todo List</p>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
