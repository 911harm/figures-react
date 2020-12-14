import React from 'react'

export default function login() {
    const [user, setUser] = useState({})
    AuthSubmit=(e)=>{
        e.prevent.default();
        console.log("Enviado")
    }

    return (
        <div className="login">
            <form className="login-form" onSubmit={AuthSubmit}>
                <input className="input-user" type="text" placeholder="User"/>
                <input className="input-pass" type="password" placeholder="Password"/>
                <button className="btn input-btn" type="submit" >Sing in</button>
            </form>
        </div>
    )
}
