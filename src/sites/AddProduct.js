import React, { useState, useForm } from 'react'
import { Link} from 'react-router-dom';

export default function AddProduct() {

  const [submiting, setSubmiting] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

    
  return (
    <>
      <div className="login">
        <Link className='login__back' to={"/"}>Back to site</Link>
        <h1 className='login__title'>Register</h1>
        <form className='login__form' onSubmit={handleSubmit}>
          <div className="login__box">
            <label>Nazwa w Kafelku</label>
            <br />
            <input
              type="text"
              className="login__input"
            />
          </div>
          <div className="login__box">
            <label>Nazwa miodu</label>
            <br />
            <input
              type="password"
              className="login__input"
            />
          </div>
          <div className="login__box">
            <label>Cena</label>
            <br />
            <input
              type="password"
              className="login__input"
            />
          </div>
          <div className="login__box">
            <label>Img link</label>
            <br />
            <input
              type="password"
              className="login__input"
            />
          </div>
          <div className="login__box">
            <label>Zawartość</label>
            <br />
            <input
              type="password"
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
