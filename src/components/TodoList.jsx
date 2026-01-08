function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <table className="todo-table">
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
                {todo.completed ? "Selesai" : "Belum"}
              </td>
              <td className="actions">
                <button onClick={() => toggleTodo(todo.id)}>✔</button>
                <button onClick={() => deleteTodo(todo.id)}>✕</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default TodoList;