import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { RegisterUser } from '../redux/apiReq'
import Helmet from './Helmet'

const RegisterForm = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handelSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            username,
            email,
            password
        }
        RegisterUser(dispatch, navigate, newUser)
    }
  return (
    <Helmet title='Register'>
        <div className="auth">
        <div className="login-box">
            <h2>Register</h2>
            <form onSubmit={handelSubmit} autocomplete="off">
                <div className="user-box">
                <input type="text" value={username} placeholder=" " onChange={(e) => setUsername(e.target.value)}/>
                <label>Username</label>
                </div>
                <div className="user-box">
                <input type="text" value={email} placeholder=" " onChange={(e) => setEmail(e.target.value)}/>
                <label>Email</label>
                </div>
                <div className="user-box">
                <input type="password" value={password} placeholder=" " onChange={(e) => setPassword(e.target.value)}/>
                <label>Password</label>
                </div>
                <div className="btn__submit" onClick={handelSubmit}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                Submit
                </div>
                <div className="redirect">
                already have an accout ? <Link to="/login">Login Now</Link>
                </div>
            </form>
        </div>
    </div>
    </Helmet>
  )
}

export default RegisterForm