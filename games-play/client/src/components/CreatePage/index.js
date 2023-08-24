import { useState } from "react";

export const CreatePage = ({onCreateGameSubmitHandler,}) => {
  const [values, setValues] = useState({
    title: "",
    category: "",
    maxLevel: "",
    imageUrl: "",
    summary: "",
  });

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onCreateGameSubmitHandler(values);
  };

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
              value={values.title}
            />

            <label htmlFor='category'>Category:</label>
            <input
              onChange={onChangeHandler}
              type='text'
              id='category'
              name='category'
              placeholder='Enter game category...'
              value={values.category}
            />

            <label htmlFor='levels'>MaxLevel:</label>
            <input
              onChange={onChangeHandler}
              type='number'
              id='maxLevel'
              name='maxLevel'
              min='1'
              placeholder='1'
              value={values.maxLevel}
            />

            <label htmlFor='game-img'>Image:</label>
            <input
              onChange={onChangeHandler}
              type='text'
              id='imageUrl'
              name='imageUrl'
              placeholder='Upload a photo...'
              value={values.imageUrl}
            />

            <label htmlFor='summary'>Summary:</label>
            <textarea
              onChange={onChangeHandler}
              name='summary'
              id='summary'
              value={values.summary}></textarea>
            <input className='btn submit' type='submit' value='Create Game' />
          </div>
        </form>
      </section>
    </>
  );
};
