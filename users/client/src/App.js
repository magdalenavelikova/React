import * as userService from "./services/userService";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Fragment, useEffect, useState } from "react";
import Search from "./components/Search";
import UserList from "./components/UserList";

import "./App.css";
function App() {
  const [users, setUsers] = useState([]);

  const onUserCreate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const { country, city, street, streetNumber, ...userData } = data;
    userData.address = { country, city, street, streetNumber };

    const createdUser = await userService.create(userData);
    if (createdUser) {
      setUsers(state=>[...state,createdUser]);
    }
    
  };

  const onUserDelete = async (userId) => {
   await userService.remove(userId);
   setUsers(state => state.filter(u=>u.Id!==userId));
       
  };

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
          <UserList users={users} 
          onUserCreate={onUserCreate} 
          onUserDelete={onUserDelete}
           />
        </section>
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;
