import { ListGroup, Button } from "react-bootstrap";
import { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";
export const ToDoItem = ({ text, isCompleted, _id }) => {
  
  const { onToDoDeleteClick, onToDoClick } = useContext(ToDoContext);
  return (
    <>
      <ListGroup.Item className='d-flex justify-content-between'onClick={()=>onToDoClick(_id)}>
        <p style={{'text-decoration': isCompleted ?'line-through':'none'}} >{text}</p>
        <Button variant='dark' onClick={() => onToDoDeleteClick(_id)}>
          x
        </Button>
      </ListGroup.Item>
    </>
  );
};
