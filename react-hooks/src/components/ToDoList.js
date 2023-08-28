import ListGroup from "react-bootstrap/ListGroup";
import { ToDoItem } from "./ToDoItem";
import { Button } from "react-bootstrap";
export const ToDoList = ({ 
  tasks,
  onToDoAddClick,
  onToDoDeleteClick, }) => {
  return (
    <div style={{ width: "50%", margin: "20px auto" }}>
      <ListGroup className='mb-5'>
        <h1> TO DO LIST</h1>
        {tasks.map((t) => 
          <ToDoItem key={t._id} {...t} onToDoDeleteClick={onToDoDeleteClick}/>
        )}
      </ListGroup>
      <Button variant='primary' onClick={onToDoAddClick}>Add task</Button>
    </div>
  );
};
