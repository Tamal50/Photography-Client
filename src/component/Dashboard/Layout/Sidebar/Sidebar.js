import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import home from '../../../../image/home.svg'
import '../../../../style/Slidbar.scss'

const Sidebar = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        fetch('https://picsmania0.herokuapp.com/isAdmin', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email: logInUser?.email })
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    })
    console.log("admin connect", isAdmin)
    return (
        
        <div className="slidbar">
            <a href="/"><img style={{height: '80px'}} alt="" src={home}></img></a>
            {
                isAdmin && <Link to="/dashboard/AddProduct"  className="btn btn-danger mt-5">Add Product</Link> 
            }
            {
                isAdmin && <Link to="/dashboard/ProductList"  className="btn btn-danger mt-5" >Product List</Link>
            }
            {
                isAdmin ? <Link to="/dashboard/allorder"  className="btn btn-danger mt-5">All Order</Link> :  <Link to="/dashboard/OderList" className="btn btn-danger mt-5"> Oder list</Link>
            }
           
        </div>
       
    );
};

export default Sidebar;