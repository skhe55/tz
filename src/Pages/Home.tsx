import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoginAction } from '../Store/redux/actions';
import { NavLink } from 'react-router-dom';
import './styles/Home.scss';


const Home = () => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const Authentication = (log: string, pass: string) => {
        return log == login && pass == password ? true : false;
    }

    return (
        <div className="bodyContainer">
            <div className="bodyFlexContainer">
                {
                    Authentication('developer21', '123456') == true ?
                        < div className="signinFlexContainer">
                            <input className="inputStyles" onChange={(e) => { setLogin(e.target.value); }} placeholder="login..."></input>
                            <input className="inputStyles" onChange={(e) => { setPassword(e.target.value); }} placeholder="password..."></input>
                            <NavLink onClick={() => dispatch(setLoginAction(login))} className="button_enabled" exact to="/Profile">Sign In</NavLink>
                        </div> :
                        < div className="signinFlexContainer">
                            <input className="inputStyles" onChange={(e) => { setLogin(e.target.value); }} placeholder="login..."></input>
                            <input className="inputStyles" onChange={(e) => { setPassword(e.target.value); }} placeholder="password..."></input>
                            <a className="button_disabled" href={"#"}>Sign In</a>
                        </div>
                }
            </div>
        </div >
    )
}

export default Home
