import { useForm } from "../../hooks/useForm";

export const AddComment = ({onCommentSubmit}) => {
 
   const { formValues, onChangeHandler, onSubmit } = useForm(
    {
      comment: '',
    },
    onCommentSubmit
  );

  
  return (
    <>
      <article className='create-comment'>
        <label>Add new comment:</label>
        <form className='form' onSubmit={onSubmit}>
          <textarea
            name='comment'
            placeholder='Comment......'
            value={formValues.comment}
            onChange={onChangeHandler}></textarea>
          <input className='btn submit' type='submit' value='Add Comment' />
        </form>
      </article>
    </>
  );
};
