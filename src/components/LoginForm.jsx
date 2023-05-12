import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { LoginUser } from '../redux/apiReq'
import Helmet from './Helmet'

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handelSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            username,
            password
        }
        LoginUser(dispatch, navigate, newUser)
    }


  return (
    <Helmet title="Login">
        <div className="auth">
        <div className="login-box">
            <h2>Login</h2>
            <form onSubmit={handelSubmit}>
                <div className="user-box">
                <input type="text" value={username} placeholder=" " name="username" onChange={(e) => setUsername(e.target.value)}/>
                <label>Username</label>
                </div>
                <div className="user-box">
                    <input type="password" placeholder=" " name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
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
                    Don't have an account? <Link to="/register">Register Now</Link>
                </div>
            </form>
        </div>
    </div>
    </Helmet>
  )
}

export default LoginForm