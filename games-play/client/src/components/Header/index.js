import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
  const { isAuthenticated, email } = useContext(AuthContext);
  return (
    <header>
      {/*<!-- Navigation -->*/}
      <h1>
        <Link className='home' to='/'>
          GamesPlay
        </Link>
      </h1>
      <nav>
        {isAuthenticated && <div>Hello, {email}!</div>}
        <Link to='/catalogue'>All games</Link>
        {isAuthenticated && (
          <div id='user'>
            <Link to='/create-game'>Create Game</Link>
            <Link to='/logout'>Logout</Link>
          </div>
        )}

        {!isAuthenticated && (
          <div id='guest'>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
};
