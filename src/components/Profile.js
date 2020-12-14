import React from 'react'
import Moment from 'react-moment';

export default function Profile({ user }) {
    return (
        <div className="profile">
            <ul>
                <li>
                    <i className="fa fa-user icon"> </i>
                    Name:{user.data.names}
                </li>
                <li>
                    <i className="fa fa-users icon"> </i>
                    LastName:{user.data.lastNames}
                </li>
                <li>
                    <i className="fa fa-code icon"> </i>
                    Username:{user.data.username}
                </li>
                <li>
                    <i className="fa fa-user-circle icon"> </i>
                    Rol:{user.data.rolDTO.name}
                </li>
                <li>
                    <i className="fa fa-calendar icon"> </i>
                    Creation Date: <Moment format="D MMM YYYY">
                        {user.data.createdAt}
                    </Moment>
                </li>
            </ul>
        </div>
    )
}
