import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { RootState } from '../Store'
import "./styles/Profile.scss";

const Profile = () => {
    const login = useSelector((state: RootState) => state.login);
    return (
        <div className="bodyContainer">
            <div className="bodyFlexContainer">
                <h1>Welcome {login}</h1>
                <NavLink className="button_logout" exact to="/">Logout</NavLink>
            </div>
        </div>
    )
}

export default Profile
