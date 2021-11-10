import React from 'react';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <div class="container-fluid display-table home">
                <div class="row display-table-row">
                    <div class="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                        <div class="logo">

                        </div>
                        <div class="navi p-3 g-5">
                            <ul>
                                <li class="active">
                                    <a href="#"><i class="fa fa-home" aria-hidden="true"></i><span class="hidden-xs hidden-sm">Pay</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-tasks" aria-hidden="true"></i><span class="hidden-xs hidden-sm">My Orders</span></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-bar-chart" aria-hidden="true"></i><span class="hidden-xs hidden-sm">Statistics</span></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-user" aria-hidden="true"></i><span class="hidden-xs hidden-sm">Review</span></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i><span class="hidden-xs hidden-sm">Logout</span></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-cog" aria-hidden="true"></i><span class="hidden-xs hidden-sm">Setting</span></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-cog" aria-hidden="true"></i><span class="hidden-xs hidden-sm">Manage All Orders</span></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-cog" aria-hidden="true"></i><span class="hidden-xs hidden-sm">Add A Product</span></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-cog" aria-hidden="true"></i><span class="hidden-xs hidden-sm">Make Admin</span></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-cog" aria-hidden="true"></i><span class="hidden-xs hidden-sm">Manage Products</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-10'>

                    </div>
                </div>
            </div>
        </div>



    );
};

export default Dashboard;