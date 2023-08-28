import { ListGroup, Button } from "react-bootstrap";
export const ToDoItem = ({ 
  text, 
  isCompleted,
   _id,
   onToDoDeleteClick, }) => {
  return (
    <>
      <ListGroup.Item className='d-flex justify-content-between'>
        {text}
        <Button variant='dark' onClick={()=>onToDoDeleteClick(_id)}>
          x
        </Button>
      </ListGroup.Item>
    </>
  );
};
