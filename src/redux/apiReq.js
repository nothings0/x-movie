import axios from "axios"
import { add } from "./MovieSlice";
import { login, register } from "./UserSlice";


const URL = "https://x-moviez.herokuapp.com"
export const LoginUser = async(dispatch, navigate, user) => {
    try {
        const res = await axios.post(`${URL}/v1/auth/login`, user)
        dispatch(login(res.data))
        navigate('/')
    } catch (error) {
        console.log(error);
    }
}

export const RegisterUser = async(dispatch, navigate, user) => {
    try {
        await axios.post(`${URL}/v1/auth/register`, user)
        dispatch(register())
        navigate('/login')
    } catch (error) {
        console.log(error);
    }
}

export const AddMovie = async(dispatch, movie) => {
    try {
        dispatch(add(movie))
    } catch (error) {
        console.log(error);
    }
}