import Axios from 'axios';
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import { API } from '../Global'
const { auth } = API
export default function Login(props) {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [token, setToken] = useState(false)

    const authSubmit = (e) => {
        e.preventDefault();
        Axios.post(auth,
            {
                username: user,
                password: pass
            })
            .then(res =>{
                setToken(res.data.Authorization)
                localStorage.setItem("token",res.data.Authorization)
                props.history.push("/myprofile")
            })
            .catch(err=>{
                console.log(" datos invalidos")
            })
    }
    const changeU = (e) => {
        setUser(e.target.value)

    }
    const changeP = (e) => {
        setPass(e.target.value)
    }
    return (
        
        <div className="login">
            <form className="login-form" onSubmit={authSubmit}>
                <img src="https://acf.geeknetic.es/imgw/imagenes/tutoriales/1375/1375-1.jpg?f=webp" alt="logo" />
                <input className="input user" onChange={changeU} type="text" placeholder="User" value={user} />
                <input className="input pass" onChange={changeP} type="password" placeholder="Password" value={pass} />
                <button className="btn input btn" type="submit" >Login</button>
            </form>
        </div>
    )
}
