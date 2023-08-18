import Task from "./Task";

export default function Table({ task, toggleTaskStatus }) {

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-header-task">Task</th>
          <th className="table-header-status">Status</th>
          <th className="table-header-action">Action</th>
        </tr>
      </thead>
      <tbody>
        {task.map((task) => 
          <Task key={task._id} {...task} toggleTaskStatus={toggleTaskStatus} />
        )}
      </tbody>
    </table>
  );
}
