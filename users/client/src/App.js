import * as userService from './services/userService';
import Footer from './components/Footer';
import Header from './components/Header';
import { Fragment, useEffect, useState } from 'react';
import Search from './components/Search';
import UserList from './components/UserList';

import './App.css';

function App() {
  const[formValues,setFormValues]=useState({   
      firstName:'',
      lastName:'',
      email:'',
      imageUrl:'',
      phoneNumber:'',
      country:'',
      city:'',
      street:'',
      streetNumber:'',    
  });

  const onFormChangeHandler = (e) => {
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    imageUrl: '',
    phoneNumber: '',
    country: '',
    city: '',
    street: '',
    streetNumber: '',
  });

  const onFormValidate = (e) => {
    const value = e.target.value;
    const targetName = e.target.name;
    let errors = {};
    if (targetName === 'firstName'  && value.length < 3) {
      errors.firstName = 'The input should be at least 3 characters long!';
    }
     if (targetName === 'lastName'  && value.length < 3) {
      errors.lastName = 'The input should be at least 3 characters long!';
    }
     if (targetName === 'city'  && value.length < 3) {
      errors.city = 'The input should be at least 3 characters long!';
    }
    if (targetName === 'country'  && value.length < 3) {
      errors.country = 'The input should be at least 3 characters long!';
    }
    if (targetName === 'street'  && value.length < 3) {
      errors.street = 'The input should be at least 3 characters long!';
    }
    //setErrors((state) => ({ ...state, [e.target.targetName]: error }));
    setFormErrors(errors);
  };

  const [users, setUsers] = useState([]);

  const onUserCreate = async (e) => {
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const { country, city, street, streetNumber, ...userData } = data;
    userData.address = { country, city, street, streetNumber };

    const createdUser = await userService.create(userData);
    if (createdUser) {
      setUsers((state) => [...state, createdUser]);
    }
  };

  const onUserEdit = async (userId, e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const { country, city, street, streetNumber, ...userData } = data;
    userData.address = { country, city, street, streetNumber };
    userData._id = userId;
    await userService.editUser(userData);
  };

  const onUserDelete = async (userId) => {
    await userService.remove(userId);
    setUsers((state) => state.filter((u) => u.Id !== userId));
  };

  useEffect(() => {
    userService
      .getAll()
      .then((u) => {
        setUsers(u);
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
  }, []);
  useEffect(() => {
    userService
      .getAll()
      .then((u) => {
        setUsers(u);
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
  }, [onUserEdit]);


  return (
    //<></> without import Fragment;
    <Fragment>
      <Header />

      <main className='main'>
        <section className='card users-container'>
          <Search />
          <UserList
            users={users}
            onUserCreate={onUserCreate}
            onUserDelete={onUserDelete}
            onUserEdit={onUserEdit}
            formValues={formValues}
            onFormChangeHandler={onFormChangeHandler}
            onFormValidate={onFormValidate}
            formErrors={formErrors}
          />
        </section>
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;
