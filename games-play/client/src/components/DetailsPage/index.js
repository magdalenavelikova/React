import { useParams } from "react-router-dom";
import * as gameService from "../../services/gameService";
import * as commentService from "../../services/commentsService";
import { useEffect, useState } from "react";

export const DetailsPage = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    gameService.getById(gameId).then((result) => {
      setGame(result);
    });
  }, [gameId]);
  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onCommentChange = (e) => {
    setComment(e.target.value);
  };
  const onCommmentSubmit = (e) => {
    e.preventDefault();
    const data = { gameId, userName, comment };
    commentService.create(data);
  };

  return (
    <>
      {/*<!--Details Page-->*/}
      <section id='game-details'>
        <h1>Game Details</h1>
        <div className='info-section'>
          <div className='game-header'>
            <img className='game-img' src={game.imageUrl} />
            <h1>{game.title}</h1>
            <span className='levels'>MaxLevel: {game.maxLevel}</span>
            <p className='type'>{game.category}</p>
          </div>

          <p className='text'>{game.summary}</p>

          {/*<!-- Bonus ( htmlFor Guests and Users ) -->*/}
          <div className='details-comments'>
            <h2>Comments:</h2>
            <ul>
              {/*<!-- list all comments htmlFor current game (If any) -->*/}
              <li className='comment'>
                <p>Content: I rate this one quite highly.</p>
              </li>
              <li className='comment'>
                <p>Content: The best game.</p>
              </li>
            </ul>
            {/*<!-- Display paragraph: If there are no games in the database -->*/}
            <p className='no-comment'>No comments.</p>
          </div>

          {/*<!-- Edit/Delete buttons ( Only htmlFor creator of this game )  -->*/}
          <div className='buttons'>
            <a href='#' className='button'>
              Edit
            </a>
            <a href='#' className='button'>
              Delete
            </a>
          </div>
        </div>

        {/*<!-- Bonus -->*/}
        {/*<!-- Add Comment ( Only htmlFor logged-in users, which is not creators of the current game ) -->*/}
        <article className='create-comment'>
          <label>Add new comment:</label>
          <form className='form' onSubmit={onCommmentSubmit}>
            <input
              type='text'
              name='username'
              placeholder='username'
              value={userName}
              onChange={onUserNameChange}
            />
            <textarea
              name='comment'
              placeholder='Comment......'
              value={comment}
              onChange={onCommentChange}></textarea>
            <input className='btn submit' type='submit' value='Add Comment' />
          </form>
        </article>
      </section>
    </>
  );
};
