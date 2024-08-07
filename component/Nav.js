import './Nav.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import advikLogo from './advik.png'; 
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/Signup');
    }

    return (
        <div>
            <img className="logo" src={advikLogo} alt='Logo'  /> 
            
            {auth ? (
                <ul className='nav-ul'>
                    <li><Link to="/">Service</Link></li>
                    <li><Link to="/add">Add Service</Link></li>
                    <li><Link to="/update">Update Service</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link onClick={logout} to="/Signup">Logout ({JSON.parse(auth).name})</Link></li>
                </ul>
            ) : (
                <ul className='nav-ul nav-right'>
                    <li><Link to="/Signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            )}
        </div>
    );
}

export default Nav;
