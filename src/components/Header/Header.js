import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { HashLink } from 'react-router-hash-link';
import { toast } from 'react-toastify';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        toast.success('You have been logged out');
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li><HashLink to="/">Home</HashLink></li>
        <li><HashLink to="/home#tools">Tools</HashLink></li>
        <li><HashLink to="/home#reviews">Review</HashLink></li>
        <li><HashLink to="/home#businessInfo">Business</HashLink></li>
        {
            !user && <li><HashLink to="/portfolio">My Portfolio</HashLink></li>
        }
        {
            !user && <li><HashLink to="/blogs">Blogs</HashLink></li>
        }
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>
        </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-2xl font-[merienda]" href='!#'>Del<span className='text-yellow-300'>ta</span></Link>
            </div>
            <div className="navbar-end lg:flex">
                <ul className="menu menu-horizontal hidden md:flex lg:flex p-0">
                    {menuItems}
                </ul>
                <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">Sidebar</label>
            </div>
        </div>
    );
};

export default Header;