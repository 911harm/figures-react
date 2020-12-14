import Axios from 'axios';
import React, { useState } from 'react'
import { API } from '../Global'
const { auth } = API
export default function Login() {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [token, setToken] = useState("")

    const authSubmit = (e) => {
        e.preventDefault();
        
        Axios.post(auth,
            {
                username: user,
                password: pass
            })
            .then(res =>{
                setToken(res.data.Authorization)
            })
    }
    const changeU = (e) => {
        setUser(e.target.value)

    }
    const changeP = (e) => {
        setPass(e.target.value)
    }

    console.log(token)
    return (
        <div className="login">
            <form className="login-form" onSubmit={authSubmit}>
                <img src="https://acf.geeknetic.es/imgw/imagenes/tutoriales/1375/1375-1.jpg?f=webp" alt="logo" />
                <input className="input user" onChange={changeU} type="text" placeholder="User" />
                <input className="input pass" onChange={changeP} type="password" placeholder="Password" />
                <button className="btn input btn" type="submit" >Sing in</button>
            </form>
        </div>
    )
}
