import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Figures from '../components/Figures'
import Profile from '../components/Profile'
import { API } from '../Global'
const { myprofile } = API

export default function Dashboard(props) {
    const [user, setUser] = useState(false)
    const [token, setToken] = useState(true)


    useEffect(() => {
        Axios.get(myprofile)
            .then(res => setUser(res.data))
            .catch(err => setToken(false))

    }, [])

    if (!token) {
        props.history.push('/');
    }
    return (
        <div>
            {user.data
                ? (<div>
                    <Profile user={user}></Profile>
                    <Figures user={user}></Figures>
                </div>)
                : (<div>LOGEA!</div>)
            }
        </div>
    )
}
