import { useState } from "react";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const addTodo = () => {
    if (!title.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ]);

    setTitle("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>

      {/* FORM INPUT */}
      <div className="form-wrapper">
        <div className="input-box">
          <input
            type="text"
            placeholder="Tambah todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={addTodo}>Tambah</button>
        </div>
      </div>

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Task</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {todos.length === 0 ? (
            <tr>
              <td colSpan="4" className="empty">
                Belum ada todo
              </td>
            </tr>
          ) : (
            todos.map((todo, index) => (
              <tr key={todo.id}>
                <td>{index + 1}</td>
                <td className={todo.completed ? "done" : ""}>
                  {todo.title}
                </td>
                <td>
                  {todo.completed ? "Selesai" : "Todo"}
                </td>
                <td className="actions">
                  <button
                    className="check"
                    onClick={() => toggleTodo(todo.id)}
                  >
                    ✔
                  </button>
                  <button
                    className="delete"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;