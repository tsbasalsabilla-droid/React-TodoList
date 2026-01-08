function TodoRow({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? "done" : ""}`}>
      <span onClick={() => toggleTodo(todo.id)}>
        {todo.title}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>✖</button>
    </li>
  );
}

export default TodoRow;
