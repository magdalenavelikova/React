import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";
export const LoginPage = () => {
  const { onLoginSubmitHandler } = useContext(AuthContext);
  const LoginFormKeys = {
    Email: "email",
    Password: "password",
  };

  const { formValues, onChangeHandler, onSubmit } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    onLoginSubmitHandler
  );

  return (
    <>
      <section id='login-page' className='auth'>
        <form id='login' method='POST' onSubmit={onSubmit}>
          <div className='container'>
            <div className='brand-logo'></div>
            <h1>Login</h1>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name={LoginFormKeys.Email}
              placeholder='Sokka@gmail.com'
              value={formValues[LoginFormKeys.Email]}
              onChange={onChangeHandler}
            />

            <label htmlFor='login-pass'>Password:</label>
            <input
              type='password'
              id='login-password'
              name={LoginFormKeys.Password}
              value={formValues[LoginFormKeys.Password]}
              onChange={onChangeHandler}
            />
            <input type='submit' className='btn submit' value='Login' />
            <p className='field'>
              <span>
                If you don't have profile click <Link to='/register'>Register</Link>
              </span>
            </p>
          </div>
        </form>
      </section>
    </>
  );
};
