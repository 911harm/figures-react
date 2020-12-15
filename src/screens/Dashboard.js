import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Profile from '../components/Profile'
import NavBar from '../components/NavBar'
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
            <NavBar></NavBar>
            {user.data
                ? (<div>
                    <Profile user={user}></Profile>
                </div>)
                : (<div>...Loading</div>)
            }
        </div>
    )
}
