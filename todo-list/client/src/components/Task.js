export default function Task({_id, text, isCompleted, toggleTaskStatus}) {
  return (
    <tr className={`todo ${isCompleted ? "is-completed" : ""}`.trim()}>
      <td>{text}</td>
      <td>{isCompleted ? "Complete" : "Not Complete"}</td>
      <td className="todo-action">
        <button className="btn todo-btn" onClick={() => toggleTaskStatus(_id)}>
          Change status
        </button>
      </td>
    </tr>
  );
}
