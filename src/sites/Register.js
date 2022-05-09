import { useState, useEffect } from 'react';
import { validateRegForm } from '../validateForm';
import "../css/register.css"
import { Link , useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'


export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setCofirmPassword] = useState('');
  const { signup } = useAuth()
  const navigate = useNavigate()

  const [errors, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submiting, setSubmiting] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    setError(validateRegForm(email, password, confirmPassword))
    setSubmiting(true)
  }

  async function signupCheack() {
    if (Object.keys(errors).length === 0 && submiting) {

      try {
        await signup(email, password)
        navigate("/")
      }
      catch (ex)
      {
        console.log(ex.code)
          if(ex.code === "auth/email-already-in-use") {
          setError({...errors, email:"Konto już istnieje"})
        }
          if(ex.code === "auth/weak-password") {
          setError({...errors, password:"Słabe hasło"})
        }
        
      }
     
      setSubmiting(false)
    }
  }

  useEffect(() => {

    const passInput = document.querySelector('#password')
    const emailInput = document.querySelector('#email')
    const pass2Input = document.querySelector('#confirmPassword')

    errors.email ? emailInput.classList.add('invalid') : emailInput.classList.remove('invalid')
    errors.password ? passInput.classList.add('invalid') : passInput.classList.remove('invalid')
    errors.confirmPassword ? pass2Input.classList.add('invalid') : pass2Input.classList.remove('invalid')

    signupCheack()
  }, [errors])

  return (
    <>
      <div className="login">
        <Link className='login__back' to={"/"}>Back to site</Link>
        <h1 className='login__title'>Register</h1>
        <form className='login__form' onSubmit={handleSubmit}>
          <div className="login__box">
            <label>E-mail</label>
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError({ ...errors, email: "" });
              }}
              name="email"
              id='email'
              className="login__input"
            />
            <label className="error">{errors.email}</label>
          </div>
          <div className="login__box">
            <label>Password</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError({ ...errors, password: "" });
              }}
              name="password"
              id='password'
              className="login__input"
            />
            <br />
            <label className="error">{errors.password}</label>
          </div>
          <div className="login__box">
            <label>Confirm Password</label>
            <br />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setCofirmPassword(e.target.value);
                setError({ ...errors, confirmPassword: "" });
              }}
              name="confirmPassword"
              id='confirmPassword'
              className="login__input"
            />
            <br />
            <label className="error">{errors.confirmPassword}</label>
          </div>


          <input disabled={ !errors && submiting} className='login__submit' type="submit" value="Submit" />
        </form>
        <Link className='register__link' to="/login">You have an account? Login</Link>
      </div>
    </>
  );
}
