import { ListGroup, Button } from "react-bootstrap";
import { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";
export const ToDoItem = ({ text, isCompleted, _id }) => {
  
  const { onToDoDeleteClick } = useContext(ToDoContext);
  return (
    <>
      <ListGroup.Item className='d-flex justify-content-between'>
        {text}
        <Button variant='dark' onClick={() => onToDoDeleteClick(_id)}>
          x
        </Button>
      </ListGroup.Item>
    </>
  );
};
