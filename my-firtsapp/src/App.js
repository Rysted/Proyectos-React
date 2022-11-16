import "./App.css";
import Navigation from "./components/Navigation.js";
import Tasks from "./components/Tasks.js";
import TodoForm from "./components/TodoForm.js";

import Todos from "./todos.json";

function App() {
  let state = {
    Todos
  }

  function handleAddTodo(todo) {
    Todos: [ ...state.Todos, todo ]
  }
  
  console.log(state)

  return (
    <div className="App">
      <header className="App-config App-header">
        <Navigation title="Tasks" totalTasks={Todos.length} />
      </header>
      <main className="App-config App-main">
        <TodoForm onAddTodo={handleAddTodo}/>
        <div className="row ms-1">
          {Todos.map((todo, i) => {
            return <Tasks {...todo} key={i} />;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
