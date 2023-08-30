import { useNavigate, useParams } from "react-router-dom";
import { gameServiceFactory } from "../../services/gameServiceFactory";
import { commentServiceFactory } from "../../services/commentsService";
import { useContext, useEffect, useState } from "react";
import { useService } from "../../hooks/useService";
import { AuthContext } from "../../contexts/AuthContext";
import { EditPage } from "../EditPage";

export const DetailsPage = () => {
  const { userId, token } = useContext(AuthContext);

  const commentService = commentServiceFactory(token);
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const gameService = useService(gameServiceFactory);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  //in collection
  useEffect(() => {
    gameService
      .getById(gameId)
      .then((result) => {
        setGame(result);
        return commentService.getAll(gameId);
      })
      .then((result) => {
                setComments(result);
      });
  }, [gameId]);

  const onDeleteClick = async () => {

    await gameService.remove(game._id);

    navigate("/catalogue");
  };
  const onEditClick = () => {
    
    navigate(`/edit/${gameId}`);
  };

  

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onCommentChange = (e) => {
    setComment(e.target.value);
    //setComments((state) => ({ ...state, comment }));
  };

  const onCommentSubmit = (e) => {
    e.preventDefault();
    const data = { gameId, userName, comment };
    console.log(data);
    const result = commentService.create(data);
    //const result = gameService.addComment(gameId, data);
   /* setGame((state) => ({
      ...state,
      comments: { ...state.comments, [result._id]: result },
    }));*/
    setComments((state) => ({ ...state, result }));
    setUserName("");
    setComment("");
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
              {comments.length!==0 &&
               comments.map((x) => (
                  <li className='comment' key={x._id}>
                    <p>
                    {x.userName}   {x.comment}
                    </p>
                  </li>
                ))}
            </ul>
            {comments.length===0 && <p className='no-comment'>No comments.</p>}
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

        {/*<!-- Bonus -->*/}
        {/*<!-- Add Comment ( Only htmlFor logged-in users, which is not creators of the current game ) -->*/}
        <article className='create-comment'>
          <label>Add new comment:</label>
          <form className='form' onSubmit={onCommentSubmit}>
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
