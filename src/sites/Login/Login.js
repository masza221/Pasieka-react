import { useState,useEffect } from 'react';
import { validateLoginForm } from '../../Utils/validateForm.js';
import { Link, useNavigate } from 'react-router-dom';
import "./login.css"
import { useAuth } from '../../contexts/AuthContext'


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const [errors, setError] = useState({
      email: "",
      password: ""
    });

    const {login} = useAuth()
    const [submiting, setSubmiting] = useState(false)
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setSubmiting(true)
       setError(validateLoginForm(email,password)) 
      }

      async function loginCheack() {
        if (Object.keys(errors).length === 0 && submiting) {
    
          try {
            await login(email, password)
          }
          catch (ex)
          { 
            if(ex.code === "auth/wrong-password")
            {
              setError({...errors, password:"Złe hasło lub login"})
            }
            if(ex.code === "auth/user-not-found")
            {
              setError({...errors, email:"Nie ma takiego użytkownika"})
            }
            if(ex.code === "auth/too-many-requests")
            {
              setError({...errors, email:"Konto zablokowane spróbuj ponownie później"})
            }
              setSubmiting(false)
              return 
          }

          setSubmiting(false)
          navigate("/")
        }
      }

      useEffect(() => {

        const passInput = document.querySelector('#password')
        const emailInput = document.querySelector('#email')
    
        errors.email ? emailInput.classList.add('invalid') : emailInput.classList.remove('invalid')
        errors.password ? passInput.classList.add('invalid') : passInput.classList.remove('invalid')

        loginCheack()
      },[errors,submiting])

    return (
        <>
          <div className="login">
          <Link className='login__back' to={"/"}>Back to site</Link>
            <h1 className='login__title'>Login</h1>
            <form className='login__form' onSubmit={handleSubmit}>
              <div className="login__box">
                <label>E-mail</label>
                <br />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value );
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
                    setPassword(e.target.value );
                    setError({ ...errors, password: "" });
                  }}
                  name="password"
                  id='password'
                  className="login__input"
                />
                <br />
                <label className="error">{errors.password}</label>
              </div>            
    
              <input disabled={!errors && submiting} className='login__submit' type="submit" value="Submit" />
            </form>
            <button className='login__submit'>Login with Google</button>
            <Link className='register__link' to="/register">No account? Register</Link>
          </div>
        </>
      );
}
