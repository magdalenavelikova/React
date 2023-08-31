export const gameReducer = (state, action) => {
    switch (action.type) {
      case "GAME_FETCH":
        return action.game;
  
      case "ADD_COMMENT":
        return{
          ...state,
        comments: [
          ...state.comments,
          {
            ...action.payload,
            author: {
             email: action.email,
            },
          },
        ],
        };
      default:
        return state;
    }
  };