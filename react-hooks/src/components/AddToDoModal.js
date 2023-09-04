import { Modal, Form, Button } from "react-bootstrap";
import { useForm } from "../hooks/useForm";


export const AddToDoModal = ({onToDoAddSubmit,onToDoAddClose, showAddToDo}) => {
  const { formValues, onChangeHandler,onSubmit } = useForm({
    text: '',
   } , onToDoAddSubmit);

 
  return (
    <Modal show={showAddToDo} onHide={onToDoAddClose} onEscapeDown={onToDoAddClose}>
      <Modal.Header closeButton onHide={onToDoAddClose}>
        <Modal.Title>Add task</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Enter your task here</Form.Label>
            <Form.Control
              type='text'
              name='text'
              placeholder='Enter your task here'
              value={formValues.text}
              onChange={onChangeHandler}
            />
          </Form.Group>

          <Button className='mr-2' variant='primary' type='submit'>
            Add
          </Button>
          <Button variant='secondary'onClick={onToDoAddClose}>Close</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
