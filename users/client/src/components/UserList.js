import User from "./User";
import { useState } from "react";
import UserDetails from "./UserDetails";
import CreateUser from "./CreateUser";
import NewUserButton from "./NewUserButton";
import * as userService from "../services/userService";
import DeleteUser from "./DeleteUser";
import EditUser from "./EditUser";

export default function UserList({
  users,
  onUserCreate,
  onUserDelete,
  onUserEdit,
  formValues,
  onFormChangeHandler,
  onFormValidate,
  formErrors,


}) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [newUserShow, setNewUserShow] = useState(false);
  const [deleteUserShow, setDeleteUserShow] = useState(false);
 
  const onInfoClick = async (userId) => {
    // const user = users.find((u) => u._id === userId);
    const user = await userService.getById(userId);
    setSelectedUser(user);
  };

  const onEditClick = async (userId) => {
    const user = await userService.getById(userId);
    console.log(user);
    setSelectedUser(user);
  };
  const onDeleteClick = (userId) => {
    setDeleteUserShow(userId);
  };
  const onCloseClick = () => {
    setSelectedUser(null);
    setNewUserShow(false);
    setDeleteUserShow(null);
  };
  const onAddNewUserClick = () => {
    setNewUserShow(true);
  };
  const onUserCreateHandler = (e) => {
    onUserCreate(e);
    setNewUserShow(false);
  };
  const onUserEditHandler = (e) => {
    onUserEdit(selectedUser._id,e);
    setSelectedUser(null);
  };
  const onUserDeleteHandler = () => {
    onUserDelete(deleteUserShow);
    setDeleteUserShow(null);
  };

  return (
    <>
      {selectedUser && (
        <UserDetails
          {...selectedUser}
          onCloseClick={onCloseClick}
          onUserCreate={onUserCreateHandler}
        />
      )}
      {selectedUser && (
        <EditUser 
        {...selectedUser} 
        onCloseClick={onCloseClick} onUserEdit={onUserEditHandler} />
      )}
      {deleteUserShow && (
        <DeleteUser
          onCloseClick={onCloseClick}
          onDelete={onUserDeleteHandler}
        />
      )}
      <div className='table-wrapper'>
        <table className='table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>
                First name
                <svg
                  className='icon svg-inline--fa fa-arrow-down Table_icon__+HHgn'
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='arrow-down'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'>
                  <path
                    fill='currentColor'
                    d='M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z'></path>
                </svg>
              </th>
              <th>
                Last name
                <svg
                  className='icon svg-inline--fa fa-arrow-down Table_icon__+HHgn'
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='arrow-down'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'>
                  <path
                    fill='currentColor'
                    d='M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z'></path>
                </svg>
              </th>
              <th>
                Email
                <svg
                  className='icon svg-inline--fa fa-arrow-down Table_icon__+HHgn'
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='arrow-down'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'>
                  <path
                    fill='currentColor'
                    d='M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z'></path>
                </svg>
              </th>
              <th>
                Phone
                <svg
                  className='icon svg-inline--fa fa-arrow-down Table_icon__+HHgn'
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='arrow-down'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'>
                  <path
                    fill='currentColor'
                    d='M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z'></path>
                </svg>
              </th>
              <th>
                Created
                <svg
                  className='icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn'
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='arrow-down'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 384 512'>
                  <path
                    fill='currentColor'
                    d='M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z'></path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <User
                key={u._id}
                {...u}
                onInfoClick={onInfoClick}
                onDeleteClick={onDeleteClick}
                onEditClick={onEditClick}
              />
            ))}
          </tbody>
        </table>
      </div>
      <NewUserButton onAddNewUserClick={onAddNewUserClick} />
      {newUserShow && (
        <CreateUser formValues={formValues}
          onUserCreate={onUserCreateHandler}
          onCloseClick={onCloseClick}
          onFormChangeHandler={onFormChangeHandler}
          onFormValidate={onFormValidate}
          formErrors={formErrors}

        />
      )}
    </>
  );
}
