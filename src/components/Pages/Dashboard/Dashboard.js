import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import Admin from '../../../hooks/Admin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = Admin(user);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <h2 className='text-3xl text-yellow-400'>Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/dashboard/addreview">Add Review</Link></li>
                        <li><Link to="/dashboard/myorders">My Orders</Link></li>
                        <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                        { admin && <li><Link to="/dashboard/users">All Users</Link></li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;