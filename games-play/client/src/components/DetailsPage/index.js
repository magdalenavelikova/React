import { useNavigate, useParams } from "react-router-dom";
import { gameServiceFactory } from "../../services/gameServiceFactory";
import { commentServiceFactory } from "../../services/commentsService";
import { useEffect, useReducer } from "react";
import { useService } from "../../hooks/useService";
import { useAuthContext } from "../../contexts/AuthContext";
import { AddComment } from "../AddComment";

import { gameReducer } from "../../reducers/gameReducer";
import { useGameContext } from "../../contexts/GameContext";

export const DetailsPage = () => {
  const { userId, isAuthenticated, email } = useAuthContext();
  const { gameId } = useParams();
  const { onDeleteGameHandler } = useGameContext();
  // const [game, setGame] = useState({});
  const commentService = commentServiceFactory();
  const gameService = useService(gameServiceFactory);
  const navigate = useNavigate();
  const [game, dispatch] = useReducer(gameReducer, {});

  useEffect(() => {
    Promise.all([
      gameService.getById(gameId),
      commentService.getAll(gameId),
    ]).then(([gameData, comments]) => {
      const gameState = {
        ...gameData,
        comments,
      };

      dispatch({ type: "GAME_FETCH", payload: gameState });
      // setGame(gameState);
    });
  }, [gameId]);

  const onDeleteClick = async () => {
    await gameService.remove(game._id);
    onDeleteGameHandler(game._id);
    navigate("/catalogue");
  };

  const onEditClick = () => {
    navigate(`/edit/${gameId}`);
  };

  const onCommentSubmit = async (formValues) => {
    const result = await commentService.create(gameId, formValues.comment);
    dispatch({
      type: "COMMENT_ADD",
      payload: result,
      email: email,
    });

    /*setGame((state) => ({
      ...state,
      comments: [
        ...state.comments,
        {
          ...result,
          author: {
            email,
          },
        },
      ],
    }));*/
  };

  const isOwner = game._ownerId === userId;

  return (
    <>
      <section id='game-details'>
        <h1>Game Details</h1>
        <div className='info-section'>
          <div className='game-header'>
            <img className='game-img' src={game.imageUrl} alt={game.title} />
            <h1>{game.title}</h1>
            <span className='levels'>MaxLevel: {game.maxLevel}</span>
            <p className='type'>{game.category}</p>
          </div>
          <p className='text'>{game.summary}</p>

          <div className='details-comments'>
            <h2>Comments:</h2>
            <ul>
              {game.comments &&
                game.comments.map((x) => (
                  <li className='comment' key={x._id}>
                    <p>
                      {x.author.email}: {x.data}
                    </p>
                  </li>
                ))}
            </ul>

            {!game.comments?.length && (
              <p className='no-comment'>No comments.</p>
            )}
          </div>

          {/*<!-- Edit/Delete buttons ( Only htmlFor creator of this game )  -->*/}
          {isOwner && (
            <div className='buttons'>
              <button className='button' onClick={onEditClick}>
                Edit
              </button>
              <button className='button' onClick={onDeleteClick}>
                Delete
              </button>
            </div>
          )}
        </div>
        {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
      </section>
    </>
  );
};
