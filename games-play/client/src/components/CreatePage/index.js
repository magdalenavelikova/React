import { useForm } from "../../hooks/useForm";
import { useGameContext } from "../../contexts/GameContext";

export const CreatePage = () => {
  const { onCreateGameSubmitHandler } = useGameContext();

  const { formValues, onChangeHandler, onSubmit } = useForm(
    {
      title: "",
      category: "",
      maxLevel: "",
      imageUrl: "",
      summary: "",
    },
    onCreateGameSubmitHandler
  );

  return (
    <>
      <section id='create-page' className='auth'>
        <form id='create' onSubmit={onSubmit}>
          <div className='container'>
            <h1>Create Game</h1>
            <label htmlFor='leg-title'>Legendary title:</label>
            <input
              onChange={onChangeHandler}
              type='text'
              id='title'
              name='title'
              placeholder='Enter game title...'
              value={formValues.title}
            />

            <label htmlFor='category'>Category:</label>
            <input
              onChange={onChangeHandler}
              type='text'
              id='category'
              name='category'
              placeholder='Enter game category...'
              value={formValues.category}
            />

            <label htmlFor='levels'>MaxLevel:</label>
            <input
              onChange={onChangeHandler}
              type='number'
              id='maxLevel'
              name='maxLevel'
              min='1'
              placeholder='1'
              value={formValues.maxLevel}
            />

            <label htmlFor='game-img'>Image:</label>
            <input
              onChange={onChangeHandler}
              type='text'
              id='imageUrl'
              name='imageUrl'
              placeholder='Upload a photo...'
              value={formValues.imageUrl}
            />

            <label htmlFor='summary'>Summary:</label>
            <textarea
              onChange={onChangeHandler}
              name='summary'
              id='summary'
              value={formValues.summary}
            ></textarea>
            <input className='btn submit' type='submit' value='Create Game' />
          </div>
        </form>
      </section>
    </>
  );
};
