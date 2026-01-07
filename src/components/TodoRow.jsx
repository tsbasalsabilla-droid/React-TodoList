function TodoRow({ todo, todos, setTodos }) {
  const markDone = () => {
    setTodos(
      todos.map((item) =>
        item.id === todo.id
          ? { ...item, completed: true }
          : item
      )
    );
  };

  const deleteTodo = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return (
    <tr>
      {/* KOLOM TASK */}
      <td>{todo.task}</td>

      {/* KOLOM STATUS */}
      <td>
        {todo.completed ? (
          <span className="status done">Completed</span>
        ) : (
          <span className="status pending">Pending</span>
        )}
      </td>

      {/* KOLOM ACTION */}
      <td className="actions">
        {!todo.completed && (
          <button className="check" onClick={markDone}>✔</button>
        )}
        <button className="delete" onClick={deleteTodo}>✖</button>
      </td>
    </tr>
  );
}

export default TodoRow;
