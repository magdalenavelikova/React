import * as userService from "./services/userService";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Fragment, useEffect,useState } from "react";
import Search from "./components/Search";
import UserList from "./components/UserList";
import NewUser from "./components/NewUser";
import "./App.css";
function App() {
const[users,setUsers]=useState([]);

  useEffect(() => {
    userService
      .getAll()
      .then((u) => {
       setUsers(u);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  }, []);
  return (
    //<></> without import Fragment;
    <Fragment>
      <Header />

      <main className='main'>
        <section className='card users-container'>
          <Search />
          <UserList users={users} />
          <NewUser />
        </section>
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;
