import { useForm } from "../../hooks/useForm";
import { gameServiceFactory } from "../../services/gameServiceFactory";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useService } from "../../hooks/useService";
import { useGameContext } from "../../contexts/GameContext";

export const EditPage = () => {
  const { gameId } = useParams();
  const gameService = useService(gameServiceFactory);
  const { onGameEditSubmitHandler } = useGameContext();
  useEffect(() => {
    gameService.getById(gameId).then((result) => {
      changeValues(result);
    });
  }, [gameId]);

  const GamesFormKeys = {
    Id: "_id",
    Title: "title",
    Category: "category",
    MaxLevel: "maxLevel",
    ImageUrl: "imageUrl",
    Summary: "summary",
  };
  const { formValues, onChangeHandler, onSubmit, changeValues } = useForm(
    {
      [GamesFormKeys.Title]: "",
      [GamesFormKeys.MaxLevel]: "",
      [GamesFormKeys.Category]: "",
      [GamesFormKeys.ImageUrl]: "",
      [GamesFormKeys.Summary]: "",
    },
    onGameEditSubmitHandler
  );

  return (
    <>
      {/*<!-- Edit Page ( Only htmlFor the creator )-->*/}
      <section id='edit-page' className='auth'>
        <form id='edit' method='POST' onSubmit={onSubmit}>
          <div className='container'>
            <h1>Edit Game</h1>
            <label htmlFor='leg-title'>Legendary title:</label>
            <input
              type='text'
              id='title'
              name={GamesFormKeys.Title}
              value={formValues[GamesFormKeys.Title]}
              onChange={onChangeHandler}
            />

            <label htmlFor='category'>Category:</label>
            <input
              type='text'
              id='category'
              name={GamesFormKeys.Category}
              value={formValues[GamesFormKeys.Category]}
              onChange={onChangeHandler}
            />

            <label htmlFor='levels'>MaxLevel:</label>
            <input
              type='number'
              id='maxLevel'
              min='1'
              name={GamesFormKeys.MaxLevel}
              value={formValues[GamesFormKeys.MaxLevel]}
              onChange={onChangeHandler}
            />

            <label htmlFor='game-img'>Image:</label>
            <input
              type='text'
              id='imageUrl'
              name={GamesFormKeys.ImageUrl}
              value={formValues[GamesFormKeys.ImageUrl]}
              onChange={onChangeHandler}
            />

            <label htmlFor='summary'>Summary:</label>
            <textarea
              id='summary'
              name={GamesFormKeys.Summary}
              value={formValues[GamesFormKeys.Summary]}
              onChange={onChangeHandler}></textarea>
            <input className='btn submit' type='submit' value='Edit Game' />
          </div>
        </form>
      </section>
    </>
  );
};
