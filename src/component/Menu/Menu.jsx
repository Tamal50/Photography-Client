import { Instagram } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import "../../style/Menu.scss"

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"menu " + (menuOpen && "active")} id="menu">
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                   <Link to="/Dashboard"><a> Dashboard</a></Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                   <Link to="/login"><a> Log In</a></Link>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="/" target="_blank"><Instagram className="icon"/></a>
                </li>
                <p>* For More Details Check Out Instagram</p>
            </ul>
        </div>
    );
};

export default Menu;