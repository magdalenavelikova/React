
import { useEffect, useState,createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { gameServiceFactory } from "../services/gameServiceFactory";

export const GameContext= createContext();

export const GameProvider=({

    children,
})=>{
    const navigate = useNavigate();
    const [games, setGames] = useState([]);
    const [latestGames, setLatestGames] = useState([]);
  
    const gameService = gameServiceFactory();
  
    useEffect(() => {
      Promise.all([gameService.getAll(), gameService.getLatest()]).then(
        ([games, latestGames]) => {
          setGames(games);
          setLatestGames(latestGames);
          console.log(latestGames);
        }
      );
    }, []);

    const onCreateGameSubmitHandler = async (data) => {
        const newGame = gameService.create(data);
        if (newGame) {
          setGames((state) => [...state, data]);
          setLatestGames((state) => [data, ...state]);
          navigate("/catalogue");
        }
      };
    
      const onGameEditSubmitHandler = async (data) => {
        const editedGame = await gameService.edit(data._id, data);
        if (editedGame) {
          setGames((state) =>
            state.map((x) => (x._id === data._id ? editedGame : x))
          );
          setLatestGames((state) =>
            state.map((x) => (x._id === data._id ? editedGame : x))
          );
          navigate(`/catalogue/${data._id}`);
        }
      };
    
      const onDeleteGameHandler = (gameId) => {
        setGames((state) => state.filter((x) => x._id !== gameId));
      };
    const selectGame=(gameId)=>{
        return games.find(game=>game._id=gameId);
    };

      const context = {
        onCreateGameSubmitHandler,
        onGameEditSubmitHandler,
        onDeleteGameHandler,
        selectGame,
        games,
        latestGames,
      };


return(
    <>
       <GameContext.Provider value={context}>
        {children}
    </GameContext.Provider>
    </>
);
};
 export const useGameContext=()=>{
    const context= useContext(GameContext);
    return context;
 };