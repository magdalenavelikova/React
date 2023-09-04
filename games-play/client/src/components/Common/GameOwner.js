import { useParams } from "react-router-dom";
import { useGameContext } from "../../contexts/GameContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const GameOwner = ({ children }) => {
  const { gameId } = useParams();
  const { selectGame } = useGameContext();
  const { userId } = useAuthContext();
  const currentGame = selectGame(gameId);

  if (currentGame._ownerId !== userId) {
    return <Navigate to={`/catalogue/${gameId}`} replace />;
  }
  return children ? children : <Outlet />;
};
