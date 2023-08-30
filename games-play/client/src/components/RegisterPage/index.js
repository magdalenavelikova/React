
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const { onRegisterSubmitHandler } = useAuthContext();
  const RegisterFormKeys = {
    Email: "email",
    Password: "password",
    ConfirmPassword: "confirmPassword",
  };
  const { formValues, onChangeHandler, onSubmit } = useForm(
    {
      [RegisterFormKeys.Email]: "",
      [RegisterFormKeys.Password]: "",
      [RegisterFormKeys.ConfirmPassword]: "",
    },
    onRegisterSubmitHandler
  );

  return (
    <>
      {/*<!-- Register Page ( Only htmlFor Guest users ) -->*/}
      <section id='register-page' className='content auth'>
        <form id='register' method='POST' onSubmit={onSubmit}>
          <div className='container'>
            <div className='brand-logo'></div>
            <h1>Register</h1>

            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name={RegisterFormKeys.Email}
              placeholder='maria@email.com'
              value={formValues[RegisterFormKeys.Email]}
              onChange={onChangeHandler}
            />

            <label htmlFor='pass'>Password:</label>
            <input
              type='password'
              name={RegisterFormKeys.Password}
              id='register-password'
              value={formValues[RegisterFormKeys.Password]}
              onChange={onChangeHandler}
            />

            <label htmlFor='con-pass'>Confirm Password:</label>
            <input
              type='password'
              name={RegisterFormKeys.ConfirmPassword}
              id='confirm-password'
              value={formValues[RegisterFormKeys.ConfirmPassword]}
              onChange={onChangeHandler}
            />

            <input className='btn submit' type='submit' value='Register' />

            <p className='field'>
              <span>
                If you already have profile click{" "}
                <Link to='/login'>Login</Link>
              </span>
            </p>
          </div>
        </form>
      </section>
    </>
  );
};
