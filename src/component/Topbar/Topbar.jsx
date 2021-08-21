import { Mail, Person } from '@material-ui/icons';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../style/Topbar.scss"
import firebase from 'firebase/app'
import { UserContext } from '../../App';



const Topbar = ({menuOpen, setMenuOpen}) => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    const handleLogOut = () => {
        firebase.auth().signOut()
        sessionStorage.removeItem('token')
      }
 
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="/" className="logo">Picsmania.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        {
                            logInUser.email ? <Link to="/" onClick={handleLogOut}><span >SignOut</span></Link>:<Link to="/login"><span>Signin</span></Link>
                        }
                    </div>
                    <div className="itemContainer">
                        <Mail  className="icon"  />
                        <span>{logInUser.email}</span>
                    </div>
                </div>
                <div className="right">
                    <div className="threeline" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;