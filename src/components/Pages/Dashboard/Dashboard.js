import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    <h2 className='text-3xl text-yellow-400'>Dashboard</h2>
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/dashboard/addreview">Add Review</Link></li>
                        <li><Link to="/dashboard/myorders">My Orders</Link></li>
                        <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;