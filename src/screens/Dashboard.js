import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API } from '../Global'
const { myprofile } = API

export default function Dashboard(props) {
    const [user, setUser] = useState(true)
    const [token, setToken] = useState(true)


    useEffect(() => {
        Axios.get(myprofile)
        .then(res => setUser(res.data))
        .catch(err=>setToken(false))

    }, [])

    if(!token){
        props.history.push('/');
    }
    return (
        <div>
            {user
                ? (<div>Bienvenido usuario</div>)
                : (<div>LOGEA!</div>)
            }
        </div>
    )
}
