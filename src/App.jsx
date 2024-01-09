import { todoStore } from "./app/todoStore";
import "./App.css";

function App() {
  const todos = todoStore((state) => state.todos);
  const input = todoStore((state) => state.input);

  const setInput = todoStore((state) => state.setInput);
  const addTodo = todoStore((state) => state.addTodo);
  const removeTodo = todoStore((state) => state.removeTodo);
  const updateTodo = todoStore((state) => state.updateTodo);

  return (
    <>
      <img
        src="Ellipse 6.png"
        className="big-element"
        alt="Design Element"
        width={100}
      />
      <img
        src="Ellipse 7.png"
        className="middle-element"
        alt="Design Element"
        width={100}
      />
      <img
        src="Ellipse 8.png"
        className="small-element"
        alt="Design Element"
        width={100}
      />
      <header>Todo List</header>
      <div className="main-container">
        <div
          className="container"
        >
          <br />

          <input
            className="input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Todo here...."
          />
          <button
            className="add-btn"
            onClick={() => {
              addTodo(input);
              setInput("");
            }}>
            Add Todo
          </button>
          <section className="todo-container">

            {todos.map((todo) => (
              <div className="todo-item">
                <p>{todo}</p>
                <div>
                  <button className="edit-btn" onClick={() => updateTodo(todo)}><img src="./edit.png" /></button>
                  <button className="close-btn" onClick={() => removeTodo(todo)}><img src="./close.png" /></button>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
