import './App.css';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
function App() {
  return (
    <div className="App">
      <h2>Todo List</h2>
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;