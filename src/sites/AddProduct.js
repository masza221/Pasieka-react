import React from 'react'

export default function AddProduct() {

  const [errors, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

    
  return (
    <>
      <div className="login">
        <Link className='login__back' to={"/"}>Back to site</Link>
        <h1 className='login__title'>Register</h1>
        <form className='login__form' onSubmit={handleSubmit}>
          <div className="login__box">
            <label>Title</label>
            <br />
            <input
              type="text"
              className="login__input"
            />
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
          </div>


          <input disabled={submiting} className='login__submit' type="submit" value="Submit" />
        </form>
        <Link className='register__link' to="/login">You have an account? Login</Link>
      </div>
    </>
  )
}
